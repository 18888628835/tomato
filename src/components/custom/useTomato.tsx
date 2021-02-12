import { useState } from "react";
import ajax from "../config/axiosConfig";
import { Params } from "../config/type";
import dayjs from "dayjs";
const useTomato = () => {
  const [tomatoes, setTomatoes] = useState([]);
  const [unFinishTomato, setUnFinishTomato] = useState<any>({});
  const getFinishedTomatoes = (tomatoes: any[]) => {
    return tomatoes.filter(
      (t) => t.ended_at !== null && t.description !== "" && t.aborted !== true
    );
  };
  const getFinishedGroup = (finishedTomatoes: any[]) => {
    const hashMap = new Map();
    finishedTomatoes.forEach((t) => {
      if (!hashMap.has(t.endDate)) {
        hashMap.set(t.endDate, [t]);
      } else {
        hashMap.get(t.endDate).push(t);
      }
    });
    return hashMap;
  };
  const finishedTomatoes = getFinishedTomatoes(tomatoes).map((t) => {
    t.startTime = dayjs(t.created_at).format("HH:mm");
    t.endTime = dayjs(t.ended_at).format("HH:mm");
    t.endDate = dayjs(t.ended_at).format("MM月DD日");
    return t;
  });
  const finishedGroup = Array.from(getFinishedGroup(finishedTomatoes));
  const getUnFinishTomato = async () => {
    try {
      const response = await ajax.get("tomatoes");
      setTomatoes(response.data.resources);
      const unFinish = response.data.resources.filter((t: any) => {
        return !t.description && !t.ended_at && !t.aborted;
      })[0];
      setUnFinishTomato(unFinish);
    } catch (error) {
      console.error(error);
    }
  };
  const finishTomato = async (params: Params) => {
    await ajax
      .put(`tomatoes/${unFinishTomato.id}`, {
        ...params,
        ended_at: new Date().toISOString(),
      })
      .then(null, (error) => {
        throw new Error(error);
      });
    getUnFinishTomato();
  };
  const startTomatoes = async () => {
    await ajax.post("tomatoes", { duration: 1500000 }).then(null, (error) => {
      throw new Error(error);
    });
    getUnFinishTomato();
  };

  return {
    setTomatoes,
    startTomatoes,
    getUnFinishTomato,
    tomatoes,
    unFinishTomato,
    getFinishedTomatoes,
    setUnFinishTomato,
    finishedTomatoes,
    finishedGroup,
    finishTomato,
  };
};

export default useTomato;
