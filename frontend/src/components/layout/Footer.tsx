import React from "react";
import Image from "next/image";
import { Globe } from "lucide-react";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.42 5.58a2.78 2.78 0 0 0 1.94 2c1.71.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.42-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
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
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#EE0033] transition-all">
                <YoutubeIcon className="w-6 h-6" />
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
