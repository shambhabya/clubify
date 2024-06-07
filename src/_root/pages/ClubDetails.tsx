const ClubDetails = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col w-5/6 pt-6">
        <div className="flex justify-between gap-5">
          <div className="w-full bg-gray-400 rounded ">
            <div className="flex-center h-10">Posts</div>
          </div>
          <div className="w-full bg-orange-300 rounded ">
            <div className="flex-center h-10">Members</div>
          </div>
          <div className="w-full bg-yellow-600 rounded ">
            <div className="flex-center h-10">Notification</div>
          </div>
          <div className="w-full bg-blue-400 rounded ">
            <div className="flex-center h-10">Club Chat</div>
          </div>
        </div>
        <p className="flex flex-center text-4xl h3-bold md:h2-bold pt-6">
          Club Name
        </p>
      </div>
    </div>
  );
};

export default ClubDetails;
