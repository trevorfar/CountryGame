"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../GlobalRedux/store";
import { setHighscore } from "../GlobalRedux/Features/userSlice";
import { endGame, nextGame } from "../GlobalRedux/Features/countrySlice";
import { updateHighscore } from "@/utils/updateDB";

const ConfirmDialog = ({
  setIsDialogVisible,
}: {
  setIsDialogVisible: (visible: boolean) => void;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { score } = useSelector((state: RootState) => state.country);
  const { username } = useSelector((state: RootState) => state.user);

  const setNewHighscore = () => {
    // if (score > highscore) {
    //   dispatch(setHighscore(score));
    // }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-15 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3">
        <div className="flex flex-col">
          <div className="flex justify-center flex-col gap-4 items-center pb-12 h-1/2">
            <h1 className="text-3xl">Give up? </h1>
            <p className="text-sm">Your score will be saved</p>
            <div className="flex flex-row gap-4">
              <button
                className="bg-red-700 text-white py-2 px-4 rounded-xl
                         hover:bg-red-700/80 hover:text-opacity-55"
                onClick={() => {
                  setIsDialogVisible(false);
                  updateHighscore(username, score);
                  dispatch(endGame());
                }}
              >
                Yes
              </button>
              <button
                className="bg-green-700 text-white py-2 px-4 rounded-xl
                         hover:bg-green-700/80 hover:text-opacity-55"
                onClick={() => {
                  setIsDialogVisible(false);
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
