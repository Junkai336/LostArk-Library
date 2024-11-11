import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CharacterInfoPresenter from "./CharacterInfoPresenter";
import * as Type from "./CharacterInfoType";

function CharacterInfoContainer() {
  // 현재 URL 경로 정보 가져오기
  const location = useLocation();

  const [characterData, setCharacterData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  // 특정 캐릭터 정보 가져오기
  const fetchCharacterData = (characterName: string) => {
    fetch(`/api/characterInfo/searchCharacterDetail?characterName=${characterName}`)
      .then(response => {
        if (!response.ok) {
          const responseJson: any = response.json();
          const errorMessage: any = JSON.parse(responseJson.errorMessage);

          setError(errorMessage);
          throw new Error(errorMessage);
        }

        return response.json();
      })
      .then(responseJson => {
        // 배열 객체 타입으로 파싱하기
        console.log(responseJson);
        const characterArmoryProfile: Type.CharacterArmoryProfile = JSON.parse(responseJson.characterArmoryProfile);
        const characterArmoryEquipment: Type.CharacterArmoryEquipment = JSON.parse(responseJson.characterArmoryEquipment);

        const characterData: Type.CharacterDetail = {
          CharacterArmoryProfile: characterArmoryProfile,
          CharacterArmoryEquipment: characterArmoryEquipment
        }
        setCharacterData(characterData);

        console.log(characterData);
      })
      .catch(error => {
        setError("캐릭터 검색 중 오류가 발생했습니다.");
        console.error(error.message);
      });
  }

  // URL 주소가 바뀌면 함수 실행
  useEffect(() => {
    // URL에서 쿼리 파라미터 추출 후 키에 대한 벨류 값 가져옴
    const characterName: string|null = new URLSearchParams(location.search).get("characterName");

    if (characterName) {
      fetchCharacterData(characterName);
    }
  }, [location])

  return (
    <CharacterInfoPresenter
      characterDetail={characterData}
      error={error}
    />
  )
}

export default CharacterInfoContainer;