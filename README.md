# ERP System

Bu proje, şirketlerin operasyonel süreçlerini dijitalleştirmek ve yönetmek amacıyla geliştirilmiş modern bir ERP (Enterprise Resource Planning) sistemidir. Backend `.NET 8`, frontend ise `Angular 20` ile geliştirilmiştir.

Özellikler
🔑 Yetkilendirme / Kimlik Doğrulama

🧑‍💼 Kullanıcı Yönetimi

🧾 Fatura ve Sipariş Yönetimi

📦 Ürün / Stok Takibi

📊 Raporlama

📅 Ajanda ve Görev Takibi (isteğe bağlı)

## 🔧 Kullanılan Teknolojiler

### Backend
- ASP.NET Core 8
- Entity Framework Core 8
- MediatR
- FluentValidation
- AutoMapper
- SQL Server

### Frontend
- Angular 20
- RxJS
- Angular Material
- SweetAlert2
- NGX Pagination

---

## 📁 Proje Yapısı
erp-system/
│
├── ERPServer/ # .NET Backend
│ ├── Application/
│ ├── Domain/
│ ├── Infrastructure/
│ └── API/
│
└── ERPClient/ # Angular Frontend
├── src/
└── angular.json

Kimlik Doğrulama
JWT tabanlı kimlik doğrulama kullanılmaktadır. Giriş yaptıktan sonra alınan token, her istekte Authorization başlığı ile gönderilmelidir:
Authorization: Bearer <token>

