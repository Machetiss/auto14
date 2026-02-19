# Analytics Tracking Strategy & Documentation

## 1. Business Goals & Metrics

| Business Goal | KPI / Metric | Event Name |
|---|---|---|
| **Get Leads (Service Requests)** | Number of valid form submissions | `generate_lead` |
| **Get Calls** | Number of clicks on phone number | `contact_click` (type: phone) |
| **Get Messenger Chats** | Number of clicks on WA/TG | `contact_click` (type: whatsapp/telegram) |
| **User Engagement** | Time on site, bounce rate | (Standard GA4/Metrika session metrics) |

## 2. Event Taxonomy

### Global Parameters
- `page_path`: URL of the page
- `page_title`: Title of the page
- `device_category`: mobile/desktop (handled by GA4/Metrika automatically usually, but good to know)

### Events

#### `generate_lead`
Trigger: User successfully submits a form (e.g., Booking Modal).
*   **Definition of Done**: Form validation passed, API request sent (or success message shown).
*   **Parameters**:
    *   `form_id`: ID of the form (e.g., `booking_modal`, `footer_callback`).
    *   `method`: `form`.

#### `contact_click`
Trigger: User clicks on a contact link.
*   **Definition of Done**: Click event fired on `<a>` tag.
*   **Parameters**:
    *   `type`: `phone`, `email`, `messenger`.
    *   `channel`: `whatsapp`, `telegram`, `phone_header`, `phone_footer`.
    *   `value`: The phone number or link (sanitized if sticking to privacy).

## 3. Implementation Details

### DataLayer Structure
We will use a `dataLayer` array compatible with GTM and direct GA4/Metrika integration.

```javascript
window.dataLayer.push({
  event: 'event_name',
  ...parameters
});
```

### Privacy & Duplication
- **Privacy**: We do not track PII (Personally Identifiable Information) like name or exact phone number in clear text if not necessary. We track *intent* (clicks).
- **Duplication**: We will use a helper function `sendEvent` to ensure we don't accidentally double-fire or fire on hydration mismatches. We will ensure one handler per element.

## 4. Verification & Debugging

### Debug Mode
1.  Open Chrome DevTools (F12).
2.  Go to **Console**.
3.  Type `dataLayer` to see the array of events.
4.  Interact with the site (click phone, submit form) and check if new objects appear in `dataLayer`.

### Data Quality Checks
- Check that `form_id` is distinct for different forms.
- Check that `contact_click` triggers ONLY on actual clicks, not just hover.

### UTM Tagging Standards
Use standard UTMs for external links (ads, social posts):
- `utm_source`: `yandex`, `google`, `vk`, `qr_code`
- `utm_medium`: `cpc`, `banner`, `offline`
- `utm_campaign`: `spring_promo`, `general`
- `utm_content`: `banner_v1`, `text_link`

Example: `https://avto14.ru/?utm_source=vk&utm_medium=cpc&utm_campaign=summer_tyres`
