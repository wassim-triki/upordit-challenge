import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Avatar from '../assets/defaultAvatar.json';
import parseImageToDataUrl from '../helpers/parseImageToDataUrl';
const Card = ({ id, denomination, stars_count, specialities }) => {
  const { images } = useSelector((store) => store.searchUsers);
  let profilePictureURL = Avatar.B64DataUrl;
  const image = images.find((img) => img.profileId == id);
  if (image && image.mimeType && image.b64Content) {
    profilePictureURL = parseImageToDataUrl(image);
  }

  console.log(specialities);
  return (
    <div className="  rounded-sm shadow-md group w-[300px] h-[300px]  hover:cursor-pointer">
      <div className="bg-blue-200 h-[200px] overflow-hidden relative">
        <div className="h-full w-full bg-black hidden group-hover:block p-4 bg-opacity-50 absolute text-white">
          <h2 className="font-extrabold">Speciality: </h2>
          <ul>
            {specialities && specialities.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
        <img
          className="w-full h-full object-cover"
          src={profilePictureURL}
          alt=""
        />
      </div>
      <div className="flex flex-col p-2 gap-4 ">
        <h2 className="self-center font-extrabold text-xl">{denomination}</h2>
        <div className="self-end flex items-center gap-1">{stars_count} ⭐</div>
      </div>
    </div>
  );
};

export default Card;
