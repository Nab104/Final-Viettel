"use client";

import React, { memo } from "react";
import Image from "next/image";
import { Department } from "../data";

interface DepartmentModalProps {
  dept: Department;
  onClose: () => void;
  hideComradeLabel?: boolean;
}

const DepartmentModal = ({ dept, onClose, hideComradeLabel }: DepartmentModalProps) => {
  const hasMainContent = !!(dept.details.group || dept.details.leader || (dept.details.mainItems && dept.details.mainItems.length > 0) || (dept.details.deputies && dept.details.deputies.length > 0));
  const [currentPage, setCurrentPage] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);
  const extraPagesCount = dept.details.extraPages?.length || 0;
  const totalPages = (hasMainContent ? 1 : 0) + extraPagesCount;

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <div className="fixed inset-0 z-[2147483647] bg-black/45 backdrop-blur-lg flex items-center justify-center p-0 animate-in fade-in duration-300 font-beausans">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/images/diahinh.png')] bg-[length:200%_auto] bg-center mix-blend-screen"></div>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(238,0,51,0.05) 0%, transparent 70%)' }}></div>

      {/* Close Button */}


      <div className="relative w-full max-w-[1600px] flex flex-col items-center h-full max-h-[100dvh] overflow-y-auto scrollbar-hide p-3 sm:p-6 lg:p-10" style={{ touchAction: 'pan-y', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}>
        {/* Inside Close Button */}
        <button onClick={onClose} className="sticky top-0 self-end text-white/50 hover:text-white z-[60] p-2 hover:bg-white/10 rounded-full cursor-pointer transition-all mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </button>
        <h2 className="relative z-50 font-beausans font-black text-xl md:text-4xl uppercase mb-8 md:mb-16 tracking-wider text-center px-4" style={{ color: '#FFFFFF' }}>
          {dept.name}
        </h2>

        <div className="w-full">
          {isMobile ? (
            // Mobile Layout: Stack everything vertically
            <div className="flex flex-col gap-12 w-full pb-10">
              {/* Main Section */}
              {hasMainContent && (
                <div className="w-full">
                  {(dept.details.use2x2Layout || dept.details.useCollageStaggered4) && dept.details.mainItems ? (
                    <div className="flex flex-col gap-6 w-full px-4">
                      {dept.details.mainItems.map((item, i) => (
                        <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                          <Image quality={75} src={encodeURI(item.img)} fill sizes="100vw" className="object-cover" alt="" />
                        </div>
                      ))}
                    </div>
                  ) : dept.details.useStaggeredOnMain && dept.details.mainItems ? (
                    <div className="flex flex-col gap-6">
                      {dept.details.mainItems.map((item, i) => (
                        <div key={i} className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10">
                          <Image quality={75} src={encodeURI(item.img)} fill sizes="100vw" className="object-cover" alt="" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-10">
                      {dept.details.leader && (
                        <div className="flex flex-col items-center">
                          <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden border border-white/10">
                            <Image quality={75} src={encodeURI(dept.details.leader.img)} fill sizes="100vw" className="object-cover" style={{ objectPosition: dept.details.leader.objectPosition || 'center' }} alt="leader" />
                          </div>
                          {!hideComradeLabel && (
                            <div className="mt-4 text-center">
                              <h4 className="text-white font-bold text-lg uppercase">Đồng chí {dept.details.leader.name.replace(/Đồng chí |ĐỒNG CHÍ /ig, '')}</h4>
                              <p className="text-gray-300 text-sm font-medium">{dept.details.leader.role}</p>
                            </div>
                          )}
                        </div>
                      )}
                      {dept.details.group && (
                        <div className="flex flex-col items-center">
                          <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/20">
                            <Image quality={75} src={encodeURI(dept.details.group.img)} fill sizes="100vw" className="object-cover" alt="group" />
                          </div>
                          <div className="mt-4 text-center">
                            <h3 className="text-white font-bold text-lg uppercase">{dept.details.group.name}</h3>
                          </div>
                        </div>
                      )}
                      {dept.details.deputies && dept.details.deputies.map((deputy, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden border border-white/10">
                            <Image quality={75} src={encodeURI(deputy.img)} fill sizes="100vw" className="object-cover" style={{ objectPosition: deputy.objectPosition || 'center' }} alt="deputy" />
                          </div>
                          {!hideComradeLabel && (
                            <div className="mt-4 text-center">
                              <h4 className="text-white font-bold text-lg uppercase">Đồng chí {deputy.name.replace(/Đồng chí |ĐỒNG CHÍ /ig, '')}</h4>
                              <p className="text-gray-300 text-sm font-medium">{deputy.role}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Extra Pages Section */}
              {dept.details.extraPages?.map((page, pIdx) => (
                <div key={pIdx} className="w-full flex flex-col gap-6">
                  {page.title && (
                    <h3 className="text-white font-bold text-lg uppercase tracking-wider text-center opacity-60 mt-4">
                      {page.title}
                    </h3>
                  )}
                  <div className="flex flex-col gap-8 w-full px-4">
                    {page.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex flex-col items-center">
                        <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                          <Image quality={75} src={encodeURI(item.img)} fill sizes="100vw" className="object-cover" style={{ objectPosition: item.objectPosition || 'center' }} alt="" />
                        </div>
                        {!hideComradeLabel && item.name && (
                          <div className="mt-4 text-center">
                            <h4 className="text-white font-bold text-lg uppercase">Đồng chí {item.name.replace(/Đồng chí |ĐỒNG CHÍ /ig, '')}</h4>
                            <p className="text-gray-300 text-sm font-medium">{item.role}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Desktop Layout: Paginated
            <div className="w-full">
              {hasMainContent && currentPage === 0 ? (
                <div className="w-full animate-in fade-in duration-500">
                  {dept.details.use2x2Layout && dept.details.mainItems ? (
                    <div className="grid grid-cols-2 gap-8 h-[620px] max-w-[1000px] mx-auto w-full">
                      {dept.details.mainItems.slice(0, 4).map((item, i) => (
                        <div key={i} className="relative rounded-[2.5rem] overflow-hidden group border-2 border-white/10 shadow-2xl">
                          <Image quality={75} src={encodeURI(item.img)} fill sizes="500px" className="object-cover transition-transform duration-1000 group-hover:scale-110" style={{ objectPosition: item.objectPosition || 'center', transform: item.scale ? `scale(${item.scale})` : 'none' }} alt="" />
                        </div>
                      ))}
                    </div>
                  ) : dept.details.useCollageStaggered4 && dept.details.mainItems ? (
                    <div className="flex gap-8 w-full h-[620px] max-w-[1200px] mx-auto">
                      <div className="relative flex-[1.4] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl group">
                        <Image quality={75} src={encodeURI(dept.details.mainItems[0].img)} fill sizes="800px" className="transition-transform duration-1000 group-hover:scale-105" style={{ objectPosition: dept.details.mainItems[0].objectPosition || 'center', objectFit: dept.details.mainItems[0].objectFit || 'cover', transform: `scale(${dept.details.mainItems[0].scale || 1}) scaleX(${dept.details.mainItems[0].scaleX || 1})` }} alt="" />
                      </div>
                      <div className="flex-[1.6] flex flex-col gap-8">
                        <div className="flex-[0.4] flex gap-8">
                          <div className="relative flex-[0.8] rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-xl group">
                            <Image quality={75} src={encodeURI(dept.details.mainItems[1].img)} fill sizes="400px" className="object-cover transition-transform duration-1000 group-hover:scale-105" style={{ objectPosition: dept.details.mainItems[1].objectPosition || 'center', transform: dept.details.mainItems[1].scale ? `scale(${dept.details.mainItems[1].scale})` : 'none' }} alt="" />
                          </div>
                          <div className="relative flex-[1.2] rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-xl group">
                            <Image quality={75} src={encodeURI(dept.details.mainItems[2].img)} fill sizes="600px" className="object-cover transition-transform duration-1000 group-hover:scale-105" style={{ objectPosition: dept.details.mainItems[2].objectPosition || 'center', transform: dept.details.mainItems[2].scale ? `scale(${dept.details.mainItems[2].scale})` : 'none' }} alt="" />
                          </div>
                        </div>
                        <div className="relative flex-[0.6] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-xl group">
                          <Image quality={75} src={encodeURI(dept.details.mainItems[3].img)} fill sizes="800px" className="object-cover transition-transform duration-1000 group-hover:scale-105" style={{ objectPosition: dept.details.mainItems[3].objectPosition || 'center', transform: dept.details.mainItems[3].scale ? `scale(${dept.details.mainItems[3].scale})` : 'none' }} alt="" />
                        </div>
                      </div>
                    </div>
                  ) : dept.details.useStaggeredOnMain && dept.details.mainItems ? (
                    <div className="w-full space-y-6">
                      <div className="flex gap-6 h-[300px]">
                        <div className="relative flex-[1.6] rounded-[2.5rem] overflow-hidden group border-2 border-white/10 shadow-2xl">
                          <Image quality={75} src={encodeURI(dept.details.mainItems[0].img)} fill sizes="800px" className="object-cover" alt="" />
                        </div>
                        <div className="relative flex-[0.8] rounded-[2.5rem] overflow-hidden group border-2 border-white/10 shadow-2xl">
                          <Image quality={75} src={encodeURI(dept.details.mainItems[1].img)} fill sizes="400px" className="object-cover" alt="" />
                        </div>
                        <div className="relative flex-[1.2] rounded-[2.5rem] overflow-hidden group border-2 border-white/10 shadow-2xl">
                          <Image quality={75} src={encodeURI(dept.details.mainItems[2].img)} fill sizes="600px" className="object-cover" alt="" />
                        </div>
                      </div>
                      <div className="flex gap-6 h-[300px]">
                        <div className="relative flex-[1] rounded-[2.5rem] overflow-hidden group border-2 border-white/10 shadow-2xl">
                          <Image quality={75} src={encodeURI(dept.details.mainItems[3].img)} fill sizes="500px" className="object-cover" alt="" />
                        </div>
                        <div className="relative flex-[1.4] rounded-[2.5rem] overflow-hidden group border-2 border-white/10 shadow-2xl">
                          <Image quality={75} src={encodeURI(dept.details.mainItems[4].img)} fill sizes="700px" className="object-cover" alt="" />
                        </div>
                        <div className="relative flex-[1.4] rounded-[2.5rem] overflow-hidden group border-2 border-white/10 shadow-2xl">
                          <Image quality={75} src={encodeURI(dept.details.mainItems[5].img)} fill sizes="700px" className="object-cover" alt="" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full flex flex-row items-start justify-center gap-6 lg:gap-12 px-4">
                      {/* Left Column: Leader */}
                      <div className="w-[300px] xl:w-[350px] shrink-0 flex flex-col items-center group">
                        {dept.details.leader ? (
                          <>
                            <div className="relative w-full h-[450px] xl:h-[550px] rounded-[2.5rem] overflow-hidden border-2 border-white/10 group-hover:border-[#EE0033]/50 transition-all duration-500 shadow-2xl">
                              <Image quality={75} src={encodeURI(dept.details.leader.img)} fill sizes="350px" className="object-cover" style={{ objectPosition: dept.details.leader.objectPosition || 'center' }} alt="leader" />
                            </div>
                            {!hideComradeLabel && (
                              <div className="mt-6 text-center">
                                <h4 className="text-white font-bold text-xl uppercase tracking-wide">Đồng chí {dept.details.leader.name.replace(/Đồng chí |ĐỒNG CHÍ /ig, '')}</h4>
                                <p className="mt-2 text-gray-200 text-lg font-medium opacity-80">{dept.details.leader.role}</p>
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="w-full h-[450px] xl:h-[550px]"></div> // Placeholder to keep symmetry
                        )}
                      </div>

                      {/* Middle Column: Group Photo */}
                      {dept.details.group && (
                        <div className="flex-1 flex flex-col items-center group min-w-[300px]">
                          <div className="relative w-full h-[450px] xl:h-[550px] rounded-[3rem] overflow-hidden border-4 border-white/20 group-hover:border-white/40 transition-all duration-500 shadow-2xl">
                            <Image quality={75} src={encodeURI(dept.details.group.img)} fill sizes="800px" className="object-cover" alt="group" />
                          </div>
                          <div className="mt-6 text-center">
                            <h3 className="text-white font-bold text-xl uppercase tracking-wide opacity-60">{dept.details.group.name}</h3>
                          </div>
                        </div>
                      )}

                      {/* Right Column: Deputies */}
                      <div className="w-[300px] xl:w-[350px] shrink-0 flex flex-col justify-start gap-10">
                        {dept.details.deputies && dept.details.deputies.length > 0 ? (
                          dept.details.deputies.map((deputy, i) => (
                            <div key={i} className="flex flex-col items-center group">
                              <div className="relative w-full h-[450px] xl:h-[550px] rounded-[2.5rem] overflow-hidden border-2 border-white/10 group-hover:border-[#EE0033]/50 transition-all duration-500 shadow-xl">
                                <Image quality={75} src={encodeURI(deputy.img)} fill sizes="350px" className="object-cover" style={{ objectPosition: deputy.objectPosition || 'center' }} alt="deputy" />
                              </div>
                              {!hideComradeLabel && (
                                <div className="mt-4 text-center">
                                  <h4 className="text-white font-bold text-xl uppercase tracking-wide">Đồng chí {deputy.name.replace(/Đồng chí |ĐỒNG CHÍ /ig, '')}</h4>
                                  <p className="mt-1 text-gray-200 text-lg font-medium opacity-80">{deputy.role}</p>
                                </div>
                              )}
                            </div>
                          ))
                        ) : (
                          <div className="w-full h-[450px] xl:h-[550px]"></div> // Placeholder to keep symmetry
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full animate-in fade-in duration-500">
                  {(() => {
                    const pageIndex = hasMainContent ? currentPage - 1 : currentPage;
                    const page = dept.details.extraPages?.[pageIndex];
                    return (
                      <div className="w-full flex flex-col items-center">
                        {page && page.title && <h3 className="text-white font-bold text-2xl uppercase tracking-wider mb-12 opacity-50">{page.title}</h3>}
                        
                        {page && page.layout === 'collage-staggered-4' ? (
                          <div className="flex gap-8 w-full h-[620px] max-w-[1300px]">
                            {/* Left Column: 1 Large Image */}
                            <div className="relative flex-[1.4] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl group">
                              <Image quality={75} src={encodeURI(page.items[0].img)} fill sizes="800px" className="object-cover transition-transform duration-1000 group-hover:scale-105" style={{ objectPosition: page.items[0].objectPosition || 'center', transform: `scale(${page.items[0].scale || 1}) scaleX(${page.items[0].scaleX || 1})` }} alt="" />
                            </div>
                            
                            {/* Right Column: 3 Images staggered */}
                            <div className="flex-[1.6] flex flex-col gap-8">
                              <div className="flex-[0.4] flex gap-8">
                                <div className="relative flex-[0.8] rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-xl group">
                                  <Image quality={75} src={encodeURI(page.items[1].img)} fill sizes="400px" className="object-cover transition-transform duration-1000 group-hover:scale-105" style={{ objectPosition: page.items[1].objectPosition || 'center', transform: page.items[1].scale ? `scale(${page.items[1].scale})` : 'none' }} alt="" />
                                </div>
                                <div className="relative flex-[1.2] rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-xl group">
                                  <Image quality={75} src={encodeURI(page.items[2].img)} fill sizes="600px" className="object-cover transition-transform duration-1000 group-hover:scale-105" style={{ objectPosition: page.items[2].objectPosition || 'center', transform: page.items[2].scale ? `scale(${page.items[2].scale})` : 'none' }} alt="" />
                                </div>
                              </div>
                              <div className="relative flex-[0.6] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-xl group">
                                <Image quality={75} src={encodeURI(page.items[3].img)} fill sizes="800px" className="object-cover transition-transform duration-1000 group-hover:scale-105" style={{ objectPosition: page.items[3].objectPosition || 'center', transform: page.items[3].scale ? `scale(${page.items[3].scale})` : 'none' }} alt="" />
                              </div>
                            </div>
                          </div>
                        ) : page && page.layout === 'collage-1-2' ? (
                          <div className="flex gap-8 w-full h-[620px] max-w-[1200px]">
                            {/* Left Column: 1 Large Image */}
                            <div className="relative flex-[1.4] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl group">
                              <Image quality={75} src={encodeURI(page.items[0].img)} fill sizes="800px" className="object-cover transition-transform duration-1000 group-hover:scale-105" style={{ transform: page.items[0].scale ? `scale(${page.items[0].scale})` : 'none' }} alt="" />
                            </div>
                            
                            {/* Right Column: 2 Images stacked */}
                            <div className="flex-[0.6] flex flex-col gap-8">
                              <div className="relative flex-1 rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-xl group">
                                <Image quality={75} src={encodeURI(page.items[1].img)} fill sizes="400px" className="object-cover transition-transform duration-1000 group-hover:scale-105" style={{ transform: page.items[1].scale ? `scale(${page.items[1].scale})` : 'none' }} alt="" />
                              </div>
                              <div className="relative flex-1 rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-xl group">
                                <Image quality={75} src={encodeURI(page.items[2].img)} fill sizes="400px" className="object-cover transition-transform duration-1000 group-hover:scale-105" style={{ transform: page.items[2].scale ? `scale(${page.items[2].scale})` : 'none' }} alt="" />
                              </div>
                            </div>
                          </div>
                        ) : page && page.layout === 'grid-2x2' ? (
                          <div className="grid grid-cols-2 gap-8 h-[620px] max-w-[1000px] mx-auto w-full">
                            {page.items.slice(0, 4).map((item, i) => (
                              <div key={i} className="relative rounded-[2.5rem] overflow-hidden group border-2 border-white/10 shadow-2xl">
                                <Image quality={75} src={encodeURI(item.img)} fill sizes="500px" className="object-cover transition-transform duration-1000 group-hover:scale-110" style={{ objectPosition: item.objectPosition || 'center', transform: item.scale ? `scale(${item.scale})` : 'none' }} alt="" />
                              </div>
                            ))}
                          </div>
                        ) : page ? (
                          <div className="grid grid-cols-3 gap-6 lg:gap-12 w-full max-w-4xl mx-auto">
                            {page.items.map((item, i) => (
                              <div key={i} className="flex flex-col items-center group">
                                <div className="relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden border-2 border-white/10 group-hover:border-[#EE0033]/50 transition-all duration-500">
                                  <Image quality={75} src={encodeURI(item.img)} fill sizes="400px" className="object-cover" style={{ objectPosition: item.objectPosition || 'center' }} alt="" />
                                </div>
                                {!hideComradeLabel && item.name && (
                                  <div className="mt-6 text-center">
                                    <h4 className="text-white font-bold text-xl uppercase">Đồng chí {item.name.replace(/Đồng chí |ĐỒNG CHÍ /ig, '')}</h4>
                                    <p className="mt-2 text-gray-200 text-lg font-medium">{item.role}</p>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom Pagination Indicators - Desktop Only */}
        {!isMobile && totalPages > 1 && (
          <div className="mt-8 flex items-center gap-6">
            <button onClick={prevPage} className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <div className="flex gap-3">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`h-2 transition-all duration-500 rounded-full ${currentPage === i ? 'w-12 bg-[#EE0033]' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                />
              ))}
            </div>
            <button onClick={nextPage} className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(DepartmentModal);
