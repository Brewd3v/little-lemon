export default function Steps() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center w-8 h-8 border-2 rounded-full bg-primary-lightGray text-primary-green text-cardtitle">
        1
      </div>
      <div className="h-[2px] bg-primary-lightGray w-6"></div>
      <div className="flex items-center justify-center w-8 h-8 border-2 rounded-full text-primary-lightGray text-cardtitle">
        2
      </div>
      <div className="h-[2px] bg-primary-lightGray w-6"></div>
      <div className="flex items-center justify-center w-8 h-8 border-2 rounded-full text-primary-lightGray text-cardtitle">
        3
      </div>
    </div>
  );
}
