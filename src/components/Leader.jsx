import React from "react";
import lead from "../image/lead.png";

const Leader = () => {
  return (
    <div className="custom-container py-8 flex md:flex-row flex-col md:gap-0 gap-4">
      <div className="md:w-[50%] w-full flex items-center justify-center">
        <img src={lead} alt="leader" className="w-[50%]" />
      </div>
      <div className="md:w-[50%] w-full">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad
          laboriosam dolorem deleniti cum, dolorum sunt et eaque minima culpa
          harum at nam quae quia est nisi laudantium deserunt natus saepe beatae
          eum molestias sed reprehenderit. Voluptatem accusantium excepturi quo
          enim magnam. Asperiores eaque, officiis pariatur illum eius ipsam
          nostrum atque hic aspernatur fugit veritatis laborum reiciendis natus,
          minus quibusdam iste quas dolores enim. Maiores beatae voluptatem,
          odio aliquam quia reprehenderit unde esse error. Est harum repellat
          exercitationem quo sint vel molestiae, corporis sit quasi et, quis
          similique reprehenderit consequatur ut voluptatem voluptates sequi
          minima commodi. Ratione quo, eius sapiente beatae numquam doloribus in
          iste inventore quisquam autem quis nemo ullam voluptate quae soluta
          ea? A reiciendis error voluptatum similique tenetur facilis ex
          blanditiis enim laudantium ea delectus nostrum, repellat
          necessitatibus possimus quo magni dicta totam qui incidunt optio
          numquam assumenda doloribus, tempore et. Asperiores cum placeat
          blanditiis voluptas. Praesentium.
        </p>
      </div>
    </div>
  );
};

export default Leader;
