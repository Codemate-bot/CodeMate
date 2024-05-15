export default function GenralMode() {
  return (
    <div className="bg-[#FAF1E4] flex flex-col lg:flex-row w-full box-sizing-border">
    {/* Sidebar */}
    <div className="bg-[#8579B2] relative flex flex-col p-8 lg:p-[52px 0 40px 0] lg:w-[330px] box-sizing-border">
      {/* Logo */}
        <div className="bg-[#8579B2] absolute left-[0px] top-[0px] right-[0px] bottom-[0px] h-[100%]">
        </div>
        <div className="relative m-[0_88.3px_40px_0] flex self-center box-sizing-border">
        <span className="font-bold text-2xl text-white">Code Mate</span>
          <div className="absolute left-[50%] bottom-[0px] translate-x-[-50%] flex box-sizing-border">
            <span className="break-words font-['Poppins'] font-bold text-[26px] leading-[1] text-[#FFFFFF]">
          
            </span>
          </div>
        </div>
        <div className="relative m-[0_0_39px_0] flex w-[330px] h-[1px] box-sizing-border">
          <div className="bg-[#414084] absolute left-[0px] top-[0px] right-[0px] bottom-[0px] h-[100%]">
          </div>
          <div className="relative flex w-[330px] h-[1px] box-sizing-border">
            <div className="bg-[#414084] w-[330px] h-[1px]">
            </div>
          </div>
        </div>
        <div className="rounded-[40px] bg-[#414084] relative m-[0_24px_844px_24px] flex self-start p-[23px_85.1px_22px_0] w-[244px] box-sizing-border">
          <div className="rounded-[40px] bg-[#414084] absolute left-[50%] top-[0px] translate-x-[-50%] w-[244px] h-[60px]">
          </div>
          <div className="relative flex flex-row box-sizing-border">
            <div className="relative m-[0_12px_1px_0] flex w-[14px] h-[14px] box-sizing-border">
              <img className="relative w-[14px] h-[14px]" />
              <div className="absolute left-[50%] bottom-[0px] translate-x-[-50%] flex w-[14px] h-[14px] box-sizing-border">
                <img className="w-[14px] h-[14px]" />
              </div>
            </div>
            <span className="break-words font-['Poppins'] font-normal text-[15px] leading-[1] text-[#FFFFFF]">
            
            </span>
          </div>
          <span className="absolute left-[56px] top-[50%] transform translate-y-[-50%] flex items-center break-words font-['Poppins'] font-normal text-[15px] leading-[1] text-[#FFFFFF]">
          <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm5 10a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1z" clipRule="evenodd" />
          </svg>
          New Chat
        </span>
        

        </div>
        <div className="rounded-[45px] bg-[#FFEED6] relative m-[0_24px_0_24px] flex self-start p-[19px_0.5px_19px_0] w-[244px] box-sizing-border">
          <span className="relative break-words font-['Plus_Jakarta_Sans'] font-semibold text-[14px] leading-[1.143] text-[#000000]">
          Log Out
          </span>
          <div className="rounded-[45px] bg-[#FFEED6] absolute left-[50%] bottom-[0px] translate-x-[-50%] flex p-[19px_0.5px_19px_0] w-[244px] box-sizing-border">
            <span className="break-words font-['Plus_Jakarta_Sans'] font-semibold text-[14px] leading-[1.143] text-[#000000]">
            Log Out
            </span>
          </div>
        </div>
      </div>
      <div className="m-[0_0_40px_0] flex flex-col items-center box-sizing-border">
        <div className="bg-[#414084] relative m-[0_0_40px_0] flex p-[33px_40px_26px_50px] w-[1590px] box-sizing-border">
          <div className="bg-[#414084] absolute left-[0px] top-[0px] right-[0px] bottom-[0px] h-[100%]">
          </div>
          <div className="relative flex flex-row justify-between w-[1500px] h-[fit-content] box-sizing-border">
            <div className="rounded-[40px] border-[1px_solid_#CEDEBD] bg-[#8579B2] flex flex-row p-[9px_39.4px_9px_39px] box-sizing-border">
              <div className="m-[15px_40.5px_15px_0] flex box-sizing-border">
                <span className="break-words font-['Poppins'] font-medium text-[13px] leading-[1] text-[#FFFFFF]">
                Individual Mode
                </span>
              </div>
              <div className="rounded-[40px] bg-[#CEDEBD] m-[0_40px_0_0] flex justify-center items-center p-[15px_0.3px_15px_0] w-[152px] h-[fit-content] box-sizing-border">
  <span className="break-words font-['Poppins'] font-medium text-[13px] leading-[1] text-[#414084]">
    General Mode
  </span>
</div>

              <div className="m-[15px_0_15px_0] flex box-sizing-border">
                <span className="break-words font-['Poppins'] font-medium text-[13px] leading-[1] text-[#FFFFFF]">
                Team Mode
                </span>
              </div>
            </div>
            <div className="m-[7px_0_14px_0] flex flex-row w-[109px] h-[fit-content] box-sizing-border">
              <div className="shadow-[0px_0px_14px_0px_rgba(0,0,0,0.15)] rounded-[20px] bg-[#FFFFFF] relative m-[9px_20px_10px_0] flex p-[6px_6px_6px_6px] w-[47px] h-[23px] box-sizing-border">
                <div className="shadow-[0px_0px_14px_0px_rgba(0,0,0,0.15)] rounded-[20px] bg-[#FFFFFF] absolute left-[50%] top-[0px] translate-x-[-50%] w-[47px] h-[23px]">
                </div>
                <div className="rounded-[20px] bg-[#25293F] absolute top-[2px] right-[2px] w-[19px] h-[19px]">
                </div>
                <div className="rounded-[20px] bg-[#25293F] absolute top-[2px] right-[2px] w-[19px] h-[19px]">
                </div>
                <div className="relative flex w-[11px] h-[11px] box-sizing-border">
                  <img className="w-[11px] h-[11px]" />
                </div>
              </div>
              <div className="rounded-[21px] bg-[url('assets/images/Ellipse139.jpeg')] bg-[50%_50%] bg-cover bg-no-repeat relative flex w-[42px] h-[42px] box-sizing-border">
                <div className="rounded-[21px] bg-[url('assets/images/Ellipse139.jpeg')] bg-[50%_50%] bg-cover bg-no-repeat w-[42px] h-[42px]">
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[6px] bg-[#F69727] absolute top-[39px] right-[42px] flex w-[12px] h-[12px] box-sizing-border">
            <div className="rounded-[6px] bg-[#F69727] w-[12px] h-[12px]">
            </div>
          </div>
        </div>
        <div className="m-[0_40px_0_100px] flex flex-row w-[fit-content] box-sizing-border">
          <div className="relative m-[683px_39px_10px_0] flex box-sizing-border">
            <div className="relative flex flex-col box-sizing-border">
              <div className="m-[0_0_29px_0] flex flex-row gap-[0_29px] w-[fit-content] box-sizing-border">
                <div className="rounded-[10px] border-[1px_solid_#BA9359] relative p-[15px_19px_15px_19px] w-[315px] box-sizing-border">
                  <div className="relative flex flex-col items-center box-sizing-border">
                    <div className="m-[0_1.5px_5px_0] inline-block break-words font-['Plus_Jakarta_Sans'] font-semibold text-[14px] leading-[1.143] text-[#8579B2]">
                    
                    </div>
                    <span className="break-words font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[1.333] text-[#849771]">
                    
                    </span>
                  </div>
                  <div className="rounded-[10px] border-[1px_solid_#BA9359] absolute left-[0px] top-[0px] right-[0px] bottom-[0px] flex flex-col p-[15px_0_15px_19px] h-[100%] box-sizing-border">
                    <div className="m-[0_0_5px_0] inline-block self-start break-words font-['Plus_Jakarta_Sans'] font-semibold text-[14px] leading-[1.143] text-[#8579B2]">
                    Come up with concepts
                    </div>
                    <span className="self-start break-words font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[1.333] text-[#849771]">
                    for a retro style arcade game
                    </span>
                  </div>
                </div>
                <div className="rounded-[10px] border-[1px_solid_#BA9359] relative p-[15px_19px_15px_19px] w-[315px] box-sizing-border">
                  <div className="relative flex flex-col box-sizing-border">
                    <div className="m-[0_0_5px_0] inline-block self-start break-words font-['Plus_Jakarta_Sans'] font-semibold text-[14px] leading-[1.143] text-[#8579B2]">
                    Explain why popcorn pops
                    </div>
                    <span className="break-words font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[1.333] text-[#849771]">
                    to a kid who loves to watch in the microvawe
                    </span>
                  </div>
                  <div className="rounded-[10px] border-[1px_solid_#BA9359] absolute left-[0px] top-[0px] right-[0px] bottom-[0px] flex flex-col p-[15px_0_15px_19px] h-[100%] box-sizing-border">
                    <div className="m-[0_0_5px_0] inline-block self-start break-words font-['Plus_Jakarta_Sans'] font-semibold text-[14px] leading-[1.143] text-[#8579B2]">
                    Explain why popcorn pops
                    </div>
                    <span className="self-start break-words font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[1.333] text-[#849771]">
                    to a kid who loves to watch in the microvawe
                    </span>
                  </div>
                </div>
                <div className="rounded-[10px] border-[1px_solid_#BA9359] relative p-[15px_19px_15px_19px] w-[315px] box-sizing-border">
                  <div className="relative flex flex-col box-sizing-border">
                    <div className="m-[0_0_5px_0] inline-block self-start break-words font-['Plus_Jakarta_Sans'] font-semibold text-[14px] leading-[1.143] text-[#8579B2]">
                    Plan a trip
                    </div>
                    <span className="break-words font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[1.333] text-[#849771]">
                    to see the nothern lights in norway
                    </span>
                  </div>
                  <div className="rounded-[10px] border-[1px_solid_#BA9359] absolute left-[0px] top-[0px] right-[0px] bottom-[0px] flex flex-col p-[15px_0_15px_19px] h-[100%] box-sizing-border">
                    <div className="m-[0_0_5px_0] inline-block self-start break-words font-['Plus_Jakarta_Sans'] font-semibold text-[14px] leading-[1.143] text-[#8579B2]">
                    Plan a trip
                    </div>
                    <span className="self-start break-words font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[1.333] text-[#849771]">
                    to see the nothern lights in norway
                    </span>
                  </div>
                </div>
              </div>
              <div className="m-[0_0_40px_0] flex flex-row gap-[0_29px] w-[fit-content] box-sizing-border">
                <div className="rounded-[10px] border-[1px_solid_#BA9359] relative p-[15px_19px_15px_19px] w-[315px] box-sizing-border">
                  <div className="relative flex flex-col box-sizing-border">
                    <div className="m-[0_0_5px_0] inline-block self-start break-words font-['Plus_Jakarta_Sans'] font-semibold text-[14px] leading-[1.143] text-[#8579B2]">
                    Give me ideas
                    </div>
                    <span className="break-words font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[1.333] text-[#849771]">
                    for what to do with my kid’s art
                    </span>
                  </div>
                  <div className="rounded-[10px] border-[1px_solid_#BA9359] absolute left-[0px] top-[0px] right-[0px] bottom-[0px] flex flex-col p-[15px_0_15px_19px] h-[100%] box-sizing-border">
                    <div className="m-[0_0_5px_0] inline-block self-start break-words font-['Plus_Jakarta_Sans'] font-semibold text-[14px] leading-[1.143] text-[#8579B2]">
                    Give me ideas
                    </div>
                    <span className="self-start break-words font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[1.333] text-[#849771]">
                    for what to do with my kid’s art
                    </span>
                  </div>
                </div>
                <div className="rounded-[10px] border-[1px_solid_#BA9359] relative p-[15px_19px_15px_19px] w-[315px] box-sizing-border">
                  <div className="relative flex flex-col items-center box-sizing-border">
                    <div className="m-[0_1.5px_5px_0] inline-block break-words font-['Plus_Jakarta_Sans'] font-semibold text-[14px] leading-[1.143] text-[#8579B2]">
                   
                    </div>
                    <span className="break-words font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[1.333] text-[#849771]">
                   
                    </span>
                  </div>
                  <div className="rounded-[10px] border-[1px_solid_#BA9359] absolute left-[0px] top-[0px] right-[0px] bottom-[0px] flex flex-col p-[15px_0_15px_19px] h-[100%] box-sizing-border">
                    <div className="m-[0_0_5px_0] inline-block self-start break-words font-['Plus_Jakarta_Sans'] font-semibold text-[14px] leading-[1.143] text-[#8579B2]">
                    Come up with concepts
                    </div>
                    <span className="self-start break-words font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[1.333] text-[#849771]">
                    for a retro style arcade game
                    </span>
                  </div>
                </div>
                <div className="rounded-[10px] border-[1px_solid_#BA9359] relative p-[15px_19px_15px_19px] w-[315px] box-sizing-border">
                  <div className="relative flex flex-col box-sizing-border">
                    <div className="m-[0_0_5px_0] inline-block self-start break-words font-['Plus_Jakarta_Sans'] font-semibold text-[14px] leading-[1.143] text-[#8579B2]">
                    Explain why popcorn pops
                    </div>
                    <span className="break-words font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[1.333] text-[#849771]">
                    to a kid who loves to watch in the microvawe
                    </span>
                  </div>
                  <div className="rounded-[10px] border-[1px_solid_#BA9359] absolute left-[0px] top-[0px] right-[0px] bottom-[0px] flex flex-col p-[15px_0_15px_19px] h-[100%] box-sizing-border">
                    <div className="m-[0_0_5px_0] inline-block self-start break-words font-['Plus_Jakarta_Sans'] font-semibold text-[14px] leading-[1.143] text-[#8579B2]">
                    Explain why popcorn pops
                    </div>
                    <span className="self-start break-words font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[1.333] text-[#849771]">
                    to a kid who loves to watch in the microvawe
                    </span>
                  </div>
                </div>
              </div>
              <div className="rounded-[5px] border-[1px_solid_#D6BC97] bg-[#FFEED6] relative m-[0_63px_0_0] p-[19px_19px_19px_19px] w-full lg:w-[fit-content] box-sizing-border">
              <input
                type="text"
                className="w-full bg-transparent placeholder-[#BA9359] font-semibold"
                placeholder="Send a message..."
              />
            </div>
            
            </div>
            <div className="rounded-r-[10px] bg-[#8579B2] absolute right-[1px] bottom-[0px] flex p-[17.8px_1px_16.8px_0] w-[74px] h-[54px] box-sizing-border">
              <div className="rounded-r-[10px] bg-[#8579B2] absolute left-[0px] top-[0px] right-[0px] bottom-[0px] h-[100%]">
              </div>
              <div className="relative flex w-[19.3px] h-[19.3px] box-sizing-border">
                <img className="w-[19.3px] h-[19.3px]" />
              </div>
            </div>
          </div>
          <div className="rounded-[10px] bg-[#EAF2E1] relative p-[420px_30px_420px_30px] w-[408px] box-sizing-border">
            <div className="rounded-[10px] bg-[#EAF2E1] absolute left-[0px] top-[0px] right-[0px] bottom-[0px] h-[100%]">
            </div>
            <p className="relative break-words font-['Poppins'] font-normal text-[25px] text-[#87A16B]">
            <span className="generated-links-of-websites-and-documents-will-appear-here-sub-0"></span><span className="generated-links-of-websites-and-documents-will-appear-here-sub-76"></span><span className="generated-links-of-websites-and-documents-will-appear-here-sub-0"></span><span className="generated-links-of-websites-and-documents-will-appear-here-sub-76"></span><span></span>
            </p>
            <p className="absolute left-[30px] top-[50%] translate-y-[-50%] break-words font-['Poppins'] font-normal text-[25px] text-[#87A16B]">
            <span className="generated-links-of-websites-and-documents-will-appear-here-1-sub-0"></span><span className="generated-links-of-websites-and-documents-will-appear-here-1-sub-76"></span><span className="generated-links-of-websites-and-documents-will-appear-here-1-sub-0"></span><span className="generated-links-of-websites-and-documents-will-appear-here-1-sub-76"></span><span></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}