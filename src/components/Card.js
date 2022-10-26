import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AiFillStar } from 'react-icons/ai';
import Avatar from '../assets/defaultAvatar.json';
import parseImageToDataUrl from '../helpers/parseImageToDataUrl';
const Card = ({ id, denomination, stars_count }) => {
  const { images } = useSelector((store) => store.searchUsers);
  let profilePictureURL = Avatar.B64DataUrl;
  const image = images.find((img) => img.profileId == id);
  if (image && image.mimeType && image.b64Content) {
    profilePictureURL = parseImageToDataUrl(image);
  }

  return (
    <div className="  rounded-sm shadow-md group w-[300px] h-[300px]">
      <div className="bg-blue-200 h-[200px] overflow-hidden">
        {/* <div className="h-full w-full bg-black bg-opacity-50 hidden group-hover:block  first-letter text-white p-4">
          <h2 className="font-bold">Specialty :</h2>
        </div> */}
        {/* <div className="bg-blue-500 bg-opacity-50 h-full w-full "></div> */}
        <img
          className="w-full h-full object-cover"
          src={profilePictureURL}
          alt=""
        />
      </div>
      <div className="flex flex-col p-2 gap-4 ">
        <h2 className="self-center font-extrabold text-xl">{denomination}</h2>
        <div className="self-end flex items-center gap-1">
          {stars_count} <AiFillStar className="text-xl text-yellow-400" />
        </div>
      </div>
    </div>
  );
};

export default Card;
