import apple from "../assets/Apple.png";
import phone from "../assets/phone.png";
import play from "../assets/playstore.png";
import logoOne from "../assets/sync360Dark.png";

const ReachUs = () => {
  return (
    <div className="bg-[#DCE3DD] py-8 px-4">
      <div className="max-w-[90%] lg:max-w-[70%] mx-auto">
        <div className="bg-gradient-to-t from-[#0a1810] via-[#1a4d2e] to-[#1a4d2e] rounded-2xl overflow-hidden flex flex-col lg:flex-row items-stretch shadow-xl">
          <div className="flex-1 px-6 py-8 lg:px-8 lg:py-8 text-white w-full flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Logo/Brand */}
            <img
              src={logoOne || "/placeholder.svg"}
              alt="sync_logo"
              width="80"
              height="80"
              className="object-contain mb-4 lg:mb-6 lg:w-[100px] lg:h-[100px]"
            />

            {/* Main Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4 leading-tight">
              Your business, synced for total growth.
            </h1>

            {/* Subtitle */}
            <p className="text-sm md:text-base mb-6 lg:mb-8 opacity-90">
              Get Sync360 and start selling, tracking, and managing your
              business.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 items-center lg:items-start">
              {/* Google Play Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.sync.sink"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#010101] gap-3 bg-black text-white px-4 py-2.5 lg:px-7 lg:py-3 rounded-lg hover:bg-gray-900 transition-colors font-medium min-w-[160px] lg:min-w-[180px]"
                style={{ backgroundColor: "#010101" }}
              >
                <img
                  src={play || "/placeholder.svg"}
                  alt="Google Play"
                  width="20"
                  height="20"
                  className="object-contain lg:w-[24px] lg:h-[24px]"
                />
                <div className="flex flex-col items-start gap-0">
                  <span className="text-[9px] lg:text-[10px] uppercase tracking-wide">
                    GET IT ON
                  </span>
                  <span className="text-xs lg:text-base font-semibold">
                    Google Play
                  </span>
                </div>
              </a>

              {/* App Store Button */}
              <a
                href="https://apps.apple.com/us/app/Sync360/id6514304272"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#010101] gap-3  text-white px-4 py-2.5 lg:px-7 lg:py-3 rounded-lg hover:bg-gray-900 transition-colors font-medium min-w-[160px] lg:min-w-[180px]"
                style={{ backgroundColor: "#010101" }}
              >
                <img
                  src={apple || "/placeholder.svg"}
                  alt="Apple App Store"
                  width="20"
                  height="20"
                  className="object-contain lg:w-[24px] lg:h-[24px]"
                />
                <div className="flex flex-col items-start gap-0">
                  <span className="text-[9px] lg:text-[10px] tracking-wide">
                    Download on the
                  </span>
                  <span className="text-xs lg:text-base font-semibold">
                    App Store
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="flex-1 relative w-full lg:w-auto flex items-end justify-center pb-0">
            <img
              src={phone || "/placeholder.svg"}
              alt="SyncGeo App"
              width="200"
              height="300"
              className="object-contain object-bottom drop-shadow-2xl lg:w-[250px] lg:h-auto max-h-[350px] lg:max-h-[450px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachUs;
