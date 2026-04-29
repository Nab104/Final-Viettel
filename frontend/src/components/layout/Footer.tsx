import React from "react";

const Facebook = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Youtube = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
);

const Globe = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20" /><path d="M12 2a14.5 14.5 0 0 1 0 20" /><line x1="2" y1="12" x2="22" y2="12" /></svg>
);

export const Footer = () => {
  return (
    <footer className="bg-[#EE0033] text-white py-20 border-t border-white/10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-8">
              <h3 className="text-3xl font-black tracking-tighter uppercase mb-2">viettel <span className="font-light opacity-70">store</span></h3>
              <div className="w-16 h-1 bg-white rounded-full"></div>
            </div>
            <p className="text-lg opacity-80 max-w-2xl leading-relaxed mb-8">
              Hệ thống bán lẻ thiết bị di động và dịch vụ số hàng đầu Việt Nam. Tự hào là một phần của Tập đoàn Công nghiệp - Viễn thông Quân đội.
            </p>
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#EE0033] transition-all">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#EE0033] transition-all">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#EE0033] transition-all">
                <Globe className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-8 text-white/60">Liên hệ</h4>
            <div className="space-y-4 opacity-80 text-sm">
              <p>Hotline: 1800 8123</p>
              <p>Email: hotro@viettelstore.vn</p>
              <p>Địa chỉ: Số 01, Giang Văn Minh, Kim Mã, Ba Đình, Hà Nội</p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60 text-xs font-bold uppercase tracking-widest">
          <p>© 2024 TẬP ĐOÀN CÔNG NGHIỆP - VIỄN THÔNG QUÂN ĐỘI</p>
          <p>VIETTEL STORE - TẤT CẢ VÌ KHÁCH HÀNG</p>
        </div>
      </div>
    </footer>
  );
};
