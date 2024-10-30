import {useEffect} from "react";
import CharacterInfoPresenter from "./CharacterInfoPresenter";

function CharacterInfoContainer () {

  useEffect(() => {
    fetch('/api/characterInfo/searchCharacter')
      .then(response => {
        console.log(response);

        if (!response.ok) {
          throw new Error('백엔드 연결 실패!');
        }
        return response.text();
      })
      .catch(error => {
        console.error('백엔드 연결 실패:', error.message);
      });
  }, []);

  return (
    <CharacterInfoPresenter />
  )
}

export default CharacterInfoContainer;