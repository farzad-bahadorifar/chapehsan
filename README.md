# پروژه سفارش آنلاین چاپ احسان (Chap Ehsan)

سامانه سفارش آنلاین خدمات چاپ احسان با رویکرد موبایل‌محور (Mobile-First)، طراحی مینیمال و تجربه کاربری روان.

## 🔗 دموی آنلاین وایرفریم‌ها (GitHub Pages)

دموی تعاملی و وایرفریم‌های فاز اول در نشانی زیر به صورت زنده در دسترس است:
👉 **[مشاهده آنلاین دموی چاپ احسان](https://farzad-bahadorifar.github.io/chapehsan/)**

- **نقشه و فهرست تمام صفحه‌ها:** [index-map.html](https://farzad-bahadorifar.github.io/chapehsan/index-map.html)
- **فرم ثبت سفارش بنر:** [index-02-banner.html](https://farzad-bahadorifar.github.io/chapehsan/index-02-banner.html)
- **آپلود فایل چاپ:** [index-03-upload.html](https://farzad-bahadorifar.github.io/chapehsan/index-03-upload.html)
- **پیگیری سفارش:** [index-06-tracking.html](https://farzad-bahadorifar.github.io/chapehsan/index-06-tracking.html)
- **پیش‌نمایش پنل مدیریت:** [index-12-admin.html](https://farzad-bahadorifar.github.io/chapehsan/index-12-admin.html)

---

## 📁 ساختار مخزن

```
chapehsan/
├── docs/                           # مستندات امکان‌سنجی، بودجه و یادداشت‌های فنی
│   ├── ai-workflow-notes.fa.md     # یادداشت‌های داخلی بهره‌وری و هوش مصنوعی
│   ├── angular-dotnet-feasibility.fa.md # بررسی فنی Angular و ASP.NET Core
│   ├── project-budget.fa.md        # برآورد زمان، هزینه و محدوده نسخه اول
│   └── notes/                      # یادداشت‌ها و تاریخچه گفتگوهای پروژه (Obsidian)
└── wireframes/                     # وایرفریم‌ها و پیش‌طرح نسخه ۰٫۲
    ├── dist/                       # فایل‌های استاتیک مستقل و قابل استقرار
    ├── prototype-v02.fragment.html # سورس کامپوننت و قالب وایرفریم‌ها
    ├── build.mjs                   # اسکریپت بیلد و تولید صفحات dist
    ├── serve.mjs                   # سرور محلی سبک
    └── verify.mjs                  # تست خودکار ساختار و صفحات
```

---

## 🚀 مشاهده محلی وایرفریم‌ها

با داشتن Node.js، می‌توانید پیش‌نمایش را روی سیستم خود اجرا کنید:

```bash
# بیلد صفحات (در صورت تغییر سورس)
node wireframes/build.mjs

# اجرای سرور محلی
node wireframes/serve.mjs
```
سپس آدرس `http://127.0.0.1:4173/` را در مرورگر باز کنید.
همچنین فایل `wireframes/dist/index.html` بدون نیاز به اینترنت و به صورت آفلاین در هر مرورگری باز می‌شود.

---

## 📋 محدوده نسخه اول (MVP)

1. **صفحه اصلی:** نمایش ۶ دسته خدمات چاپ با اولویت بنر.
2. **جریان سفارش آنلاین بنر:** محاسبه ابعاد و متراژ، انتخاب خدمات تکمیلی (پانچ، ولد/دوخت)، دریافت فایل با کنترل اندازه و فرمت، پرداخت آنلاین و دریافت کد رهگیری.
3. **پیگیری سفارش:** استعلام وضعیت تولید و پرداخت بر اساس شماره سفارش و شماره تماس.
4. **پنل مدیریت چاپخانه:** مشاهده سفارش‌ها، دریافت فایل اصلی، تغییر وضعیت سفارش و مدیریت تعرفه‌ها.
5. **سایر ۵ دسته:** نمایش کارت معرفی محصول و دکمه تماس جهت هماهنگی تا زمان فعال‌سازی آنلاین.
