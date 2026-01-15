// import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery/ImageGallery";

export const metadata = {
  title: "L’empire Builders | Best Builders in Kerala",
  description:
    "We handle complete turnkey construction -from 2D planning and 3D designing to full execution and key handover. With 5+ years of experience and 50+ homes delivered across Kerala, we bring your dream home to life effortlessly.",
};

const page = () => {
  return (
    <>
      <div className="gallery_page padding_section">
        <div>
          <ImageGallery interior={"Living Room"}
            images={[
                      "/images/interior/living_room/1.jpg",
                      "/images/interior/living_room/2.jpg",
                      "/images/interior/living_room/3.jpg",
                      "/images/interior/living_room/4.jpg",
                      "/images/interior/living_room/5.png",
                      "/images/interior/living_room/6.jpg",
                      "/images/interior/living_room/7.jpg",
                      "/images/interior/living_room/8.jpg",
                      "/images/interior/living_room/9.jpg",
                      "/images/interior/living_room/10.png",
                      "/images/interior/living_room/11.png",
                      "/images/interior/living_room/12.jpg",
                      "/images/interior/living_room/13.png",
                      "/images/interior/living_room/14.jpg",
                      "/images/interior/living_room/15.jpg",
                      "/images/interior/living_room/16.jpg",
                      "/images/interior/living_room/17.png",
                      "/images/interior/living_room/18.png",
                      "/images/interior/living_room/19.jpg",
                      "/images/interior/living_room/20.jpg",
                      "/images/interior/living_room/21.jpg",
                      "/images/interior/living_room/22.jpg",
                      "/images/interior/living_room/23.png",
                      "/images/interior/living_room/24.jpg",
                      "/images/interior/living_room/25.png",
                      "/images/interior/living_room/26.jpg",
                      "/images/interior/living_room/27.png",
                      "/images/interior/living_room/28.png",
                      "/images/interior/living_room/29.jpg",
                      "/images/interior/living_room/30.png",
                      "/images/interior/living_room/31.png",
            ]}
          />
          <ImageGallery interior={"Kitchen"}
            images={[
          "/images/interior/kitchen/1.jpg",
          "/images/interior/kitchen/2.jpg",
          "/images/interior/kitchen/4.jpg",
          "/images/interior/kitchen/5.jpg",
          "/images/interior/kitchen/6.jpg",
          "/images/interior/kitchen/7.jpg",
          "/images/interior/kitchen/8.png",
          "/images/interior/kitchen/9.png",
          "/images/interior/kitchen/10.jpg",
          "/images/interior/kitchen/11.jpg",
          "/images/interior/kitchen/12.jpg",
          "/images/interior/kitchen/13.png",
          "/images/interior/kitchen/14.png",
          "/images/interior/kitchen/15.png",
            ]}
          />
          <ImageGallery interior={"Dining Area"}
            images={[
                      "/images/interior/living_room/1.jpg",
                      "/images/interior/living_room/2.jpg",
                      "/images/interior/living_room/3.jpg",
                      "/images/interior/living_room/4.jpg",
                      "/images/interior/living_room/5.png",
            ]}
          />
          <ImageGallery interior={"Bedroom"}
            images={[
              "/images/interior/bedroom/1.jpg",
                            "/images/interior/bedroom/2.jpg",
                            "/images/interior/bedroom/3.jpg",
                            "/images/interior/bedroom/4.jpg",
                            "/images/interior/bedroom/5.jpg",
                            "/images/interior/bedroom/6.jpg",
                            "/images/interior/bedroom/11.png",
                            "/images/interior/bedroom/12.png",
                            "/images/interior/bedroom/7.jpg",
                            "/images/interior/bedroom/8.jpg",
                            "/images/interior/bedroom/10.png",
                            "/images/interior/bedroom/9.png"
            ]}
          />
          <ImageGallery interior={"Prayer Area"}
            images={[
                            "/images/interior/prayer_area/1.jpg",
                            "/images/interior/prayer_area/2.png",
                            "/images/interior/prayer_area/3.jpg",
                            "/images/interior/prayer_area/4.jpg",
                            "/images/interior/prayer_area/5.jpg",
                            "/images/interior/prayer_area/6.jpg",
            ]}
          />
            <ImageGallery interior={"TV Unit"}
            images={[
              "/images/interior/tv_unit/1.jpg",
                            "/images/interior/tv_unit/2.png",
                            "/images/interior/tv_unit/3.png",
                            "/images/interior/tv_unit/4.png",
                            "/images/interior/tv_unit/5.png",
            ]}
          />
        </div>
      </div>
      <Footer title="Ready to work with us ?" />
    </>
  );
};

export default page;
