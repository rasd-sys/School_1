/**
 * ═══════════════════════════════════════════════════════════
 *  مركز إرسال الرسائل — إعدادات غلاف PWA
 *  ⚡ هذا الملف الوحيد الذي يحتاج تعديل عند تغيير الرابط
 * ═══════════════════════════════════════════════════════════
 */
const PWA_CONFIG = {
  // 🔗 ضع رابط تطبيق Apps Script بعد النشر هنا
  APP_URL: 'https://script.google.com/macros/s/AKfycbxX9rRg4O--_QZMaE84vK_3k6J8_WHhmEex81CLKoO7LS2RgD4JGA9WiPK5gYz23tlRSg/exec?magazine=true',

  // 📋 معلومات التطبيق
  APP_NAME: 'مركز إرسال الرسائل',
  APP_SHORT_NAME: 'مركز الرسائل',
  APP_VERSION: '2.0.0',

  // ⏱️ إعدادات التحميل
  LOAD_TIMEOUT: 10000,      // مهلة إظهار زر الفتح المباشر (مللي ثانية)
  SPLASH_DURATION: 600,     // مدة بقاء الـ Splash بعد التحميل (مللي ثانية)
  INSTALL_PROMPT_DELAY: 3000 // مهلة إظهار زر التثبيت (مللي ثانية)
};
