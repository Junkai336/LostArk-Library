import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CharacterInfoPresenter from "./CharacterInfoPresenter";
import * as Type from "./CharacterInfoType";

function CharacterInfoContainer() {
  // 현재 URL 경로 정보 가져오기
  const location = useLocation();
  const [characterData, setCharacterData] = useState<Type.Any>();

  // 특정 캐릭터 정보 가져오기
  const fetchCharacterData = (characterName: string) => {
    fetch(`/api/characterInfo/searchCharacter?characterName=${characterName}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('데이터를 가져오는 중 오류가 발생했습니다.');
        }

        return response.json();
      })
      .then(data => {
        // 배열 객체 타입으로 파싱하기
        const characterData = JSON.parse(data.data);
        setCharacterData(characterData);

        console.log(characterData);
        console.log(characterData[0].ServerName);
      })
      .catch(error => {
        console.error('데이터를 가져오는 중 오류가 발생했습니다. :', error.message);
      });
  }

  // URL 주소가 바뀌면 함수 실행
  useEffect(() => {
    // URL에서 쿼리 파라미터 추출 후 키에 대한 벨류 값 가져옴
    const characterName = new URLSearchParams(location.search).get("characterName");

    if (characterName) {
      fetchCharacterData(characterName);
    }
  }, [location])

  return (
    <CharacterInfoPresenter
      characterDetail={characterData}
    />
  )
}

export default CharacterInfoContainer;