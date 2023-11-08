const Photo = ({ photos }) => {
  switch (photos.length) {
    case 1:
      return (
        <div className="mt-3">
          <img
            src={photos[0]}
            className="max-h-[510px] object-cover border border-[color:var(--backgraund-third)] rounded-2xl"
          />
        </div>
      );

    case 2:
      return (
        <div className="mt-3 grid grid-cols-2 gap-0.5 h-[288px] border border-[color:var(--backgraund-third)] rounded-2xl overflow-hidden">
          <img src={photos[0]} className="h-full w-full object-cover " />
          <img src={photos[1]} className="h-full w-full object-cover " />
        </div>
      );

    case 3:
      return (
        <div className="mt-3 grid grid-cols-2 gap-0.5 h-[288px] border border-[color:var(--backgraund-third)] rounded-2xl overflow-hidden">
          <img src={photos[0]} className="h-full w-full object-cover " />
          <div className="h-full flex flex-col gap-0.5">
   <div className="flex-shrink-0 flex-1 relative">
   <img src={photos[1]} className="h-full absolute inset-0 w-full flex-shrink-0 object-cover " />
   </div>
   <div className="flex-shrink-0 flex-1 relative">
   <img src={photos[2]} className="h-full w-full absolute inset-0 flex-shrink-0 object-cover " />

   </div>
          </div>
        </div>
      );

    case 4:
return (
    <div className="mt-3 grid grid-cols-2 gap-0.5 h-[286px] border border-[color:var(--backgraund-third)] rounded-2xl overflow-hidden">
    <img src={photos[0]} className="h-[141px] w-full object-cover " />
    <img src={photos[1]} className="h-[141px] w-full object-cover " />
    <img src={photos[2]} className="h-[141px] w-full object-cover " />
    <img src={photos[3]} className="h-[141px] w-full object-cover " />
  </div>
);



  }
};

export default Photo;
