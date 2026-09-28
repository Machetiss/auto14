import telebot
import json
import os
from telebot.types import InlineKeyboardMarkup, InlineKeyboardButton

# ВАЖНО: Замените на токен, полученный от @BotFather
TOKEN = "ВАШ_ТОКЕН_БОТА"  

# Если токен не изменен, предупредим пользователя
if TOKEN == "ВАШ_ТОКЕН_БОТА":
    print("ВНИМАНИЕ! Пожалуйста, откройте этот скрипт и вставьте ваш токен от BotFather в переменную TOKEN.")
    exit(1)

bot = telebot.TeleBot(TOKEN)

# Пути к файлам
BASE_DIR = os.path.dirname(__file__)
QUESTIONS_FILE = os.path.join(BASE_DIR, "gallup_questions.json")
SESSIONS_FILE = os.path.join(BASE_DIR, "gallup_sessions.json")

# Загрузка вопросов
try:
    with open(QUESTIONS_FILE, "r", encoding="utf-8") as f:
        questions = json.load(f)
except FileNotFoundError:
    print(f"Ошибка: Файл {QUESTIONS_FILE} не найден. Сначала запустите скрипт generate_gallup.py")
    exit(1)

# Вспомогательные функции для работы с сессиями
def load_sessions():
    if os.path.exists(SESSIONS_FILE):
        with open(SESSIONS_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    return {}

def save_sessions(sessions):
    with open(SESSIONS_FILE, "w", encoding="utf-8") as f:
        json.dump(sessions, f, ensure_ascii=False, indent=2)

def get_question_markup():
    markup = InlineKeyboardMarkup(row_width=5)
    # Кнопки от 1 до 5
    buttons = [InlineKeyboardButton(str(i), callback_data=f"ans_{i}") for i in range(1, 6)]
    markup.add(*buttons)
    return markup

@bot.message_handler(commands=['start'])
def send_welcome(message):
    chat_id = str(message.chat.id)
    sessions = load_sessions()
    
    # Начинаем новую сессию
    sessions[chat_id] = {
        "current_q": 0,
        "answers": []
    }
    save_sessions(sessions)
    
    welcome_text = (
        "👋 Добро пожаловать в тест на определение сильных сторон (аналог Gallup CliftonStrengths)!\n\n"
        "Вам предстоит ответить на 177 пар утверждений.\n"
        "Оценивайте каждую пару по шкале от 1 до 5:\n"
        "1 — Полностью согласен с утверждением А\n"
        "2 — Скорее согласен с утверждением А\n"
        "3 — Нейтрально\n"
        "4 — Скорее согласен с утверждением Б\n"
        "5 — Полностью согласен с утверждением Б\n\n"
        "Старайтесь отвечать быстро и интуитивно (не более 20 секунд на вопрос).\n"
    )
    
    # Отправляем приветствие, а затем первый вопрос
    bot.send_message(chat_id, welcome_text)
    send_question(chat_id, sessions)

def send_question(chat_id, sessions):
    current_idx = sessions[chat_id]["current_q"]
    
    if current_idx >= len(questions):
        finish_test(chat_id, sessions)
        return
        
    q = questions[current_idx]
    
    text = (
        f"Вопрос {q['id']} из {len(questions)}\n\n"
        f"<b>А:</b> {q['statement_a']}\n"
        f"   <i>--- или ---</i>\n"
        f"<b>Б:</b> {q['statement_b']}\n\n"
        f"Выберите от 1 (А) до 5 (Б):"
    )
    
    bot.send_message(chat_id, text, reply_markup=get_question_markup(), parse_mode="HTML")

@bot.callback_query_handler(func=lambda call: call.data.startswith('ans_'))
def handle_answer(call):
    chat_id = str(call.message.chat.id)
    sessions = load_sessions()
    
    if chat_id not in sessions:
        bot.answer_callback_query(call.id, "Сессия не найдена. Нажмите /start")
        return
        
    current_idx = sessions[chat_id]["current_q"]
    if current_idx >= len(questions):
        bot.answer_callback_query(call.id, "Тест уже завершен.")
        return
        
    # Получаем ответ
    answer_val = int(call.data.split('_')[1])
    q = questions[current_idx]
    
    # Сохраняем ответ
    sessions[chat_id]["answers"].append({
        "id": q["id"],
        "theme_a": q["theme_a"],
        "theme_b": q["theme_b"],
        "answer": answer_val
    })
    
    # Переходим к следующему вопросу
    sessions[chat_id]["current_q"] += 1
    save_sessions(sessions)
    
    # Меняем текст предыдущего сообщения, чтобы убрать кнопки
    old_text = (
        f"✅ Вопрос {q['id']} пройден.\nВаш ответ: {answer_val}"
    )
    bot.edit_message_text(text=old_text, chat_id=call.message.chat.id, message_id=call.message.message_id, reply_markup=None)
    
    # Подтверждаем клик (чтобы часики не крутились)
    bot.answer_callback_query(call.id)
    
    # Отправляем следующий вопрос
    send_question(chat_id, sessions)

def finish_test(chat_id, sessions):
    bot.send_message(chat_id, "🎉 Поздравляю! Вы ответили на все 177 вопросов. Сейчас я подготовлю файл с результатами...")
    
    answers = sessions[chat_id]["answers"]
    
    # Создаем текстовый файл
    result_filename = os.path.join(BASE_DIR, f"gallup_results_{chat_id}.json")
    with open(result_filename, "w", encoding="utf-8") as f:
        json.dump(answers, f, ensure_ascii=False, indent=2)
        
    with open(result_filename, "rb") as doc:
        bot.send_document(chat_id, doc, caption="Ваш результат! Скачайте этот файл и отправьте его ИИ-ассистенту для полного анализа ваших 34 сильных сторон.")
        
    # Очищаем сессию (чтобы можно было пройти тест заново при желании)
    del sessions[chat_id]
    save_sessions(sessions)

if __name__ == "__main__":
    print("Бот успешно запущен! Ожидание сообщений... Нажмите Ctrl+C для остановки.")
    bot.polling(none_stop=True)
