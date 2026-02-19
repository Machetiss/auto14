import pypdf

def extract_text_from_pdf(pdf_path, output_txt_path):
    try:
        reader = pypdf.PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        
        with open(output_txt_path, "w", encoding="utf-8", errors="ignore") as f:
            f.write(text)
        print(f"Successfully extracted text to {output_txt_path}")
    except Exception as e:
        print(f"Error extracting text: {e}")

if __name__ == "__main__":
    extract_text_from_pdf("geo_guide.pdf", "geo_guide.txt")
