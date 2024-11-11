export interface Any {
  a: any;
}

export interface CharacterInfoPresenterProps {
  characterDetail: CharacterDetail;
  error: string | null
}

interface CharacterStat {
  Type: string;
  Value: string;
  Tooltip: string[];
}

interface CharacterTendencies {
  Type: string;
  Point: number;
  MaxPoint: number;
}

export interface CharacterArmoryProfile {
  CharacterClassName: string;
  CharacterImage: string;
  CharacterLevel: number;
  CharacterName: string;
  ExpeditionLevel: number;
  GuildMemberGrade: string|null;
  GuildName: string|null;
  ItemAvgLevel: string;
  ItemMaxLevel: string;
  PvpGradeName: string;
  ServerName: string;
  Stats: CharacterStat[];
  Tendencies: CharacterTendencies[];
  Title: string|null;
  TotalSkillPoint: number;
  TownLevel: number;
  UsingSkillPoint: number;
}

export interface CharacterArmoryEquipment {
  Type: string;
  Name: string;
  Icon: string;
  Grade: string;
  Tooltip: string;
}

export interface CharacterDetail {
  CharacterArmoryProfile: CharacterArmoryProfile;
  CharacterArmoryEquipment: CharacterArmoryEquipment;
}