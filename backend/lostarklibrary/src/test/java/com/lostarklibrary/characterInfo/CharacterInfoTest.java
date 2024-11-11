package com.lostarklibrary.characterInfo;

import net.minidev.json.JSONArray;
import net.minidev.json.JSONObject;
import net.minidev.json.parser.JSONParser;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;


@SpringBootTest                                 // application.properties 파일에 정의된 값을 주입받기 위해 스프링 컨텍스트 로드
public class CharacterInfoTest {
    @Value("${lostark.api.key}")
    private String lostarkApiKey;

    /*
        JSONArray 응답

        있는 캐릭터 : 원정대 내 캐릭터를 모두 불러옴 [{}, {}, ...]
        없는 캐릭터 : [] 반환

        key 리스트
            - CharacterClassName
            - ItemMaxLevel
            - CharacterLevel
            - ItemAvgLevel
            - ServerName
            - CharacterName
    */
    @Test
    public void 캐릭터_정보_캐릭터리스트_불러오기() {
        System.out.println(lostarkApiKey);

        try {
            String characterName = URLEncoder.encode("내장을통해미래를보는점술", StandardCharsets.UTF_8);

            URL url = new URL("https://developer-lostark.game.onstove.com/characters/" + characterName + "/siblings");

            HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();

            httpURLConnection.setRequestMethod("GET");
            httpURLConnection.setRequestProperty("authorization", "Bearer " + lostarkApiKey);
            httpURLConnection.setRequestProperty("content-Type", "application/json");
            httpURLConnection.setRequestProperty("Accept", "application/json");

            int responseCode = httpURLConnection.getResponseCode();

            InputStream inputStream;

            if (responseCode == 200) {
                inputStream = httpURLConnection.getInputStream();
            } else {
                inputStream = httpURLConnection.getErrorStream();
                System.out.println("에러코드: " + responseCode);
            }

            InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
            JSONParser parser = new JSONParser();
            Object obj = parser.parse(inputStreamReader);

            if (obj instanceof JSONArray) {
                JSONArray array = (JSONArray) obj;
                System.out.println("JSONArray 응답: " + array);
            } else if (obj instanceof JSONObject) {
                JSONObject jsonObject = (JSONObject) obj;
                System.out.println("JSONObject 응답: " + jsonObject);
            } else {
                System.out.println("알 수 없는 응답 타입: " + obj.getClass().getName());
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    /*
        JSONObject 응답

        key 리스트
            - CharacterImage
            - ExpeditionLevel
            - PvpGradeName
            - TownLevel
            - TownName
            - Title
            - GuildMemberGrade
            - GuildName
            - UsingSkillPoint
            - TotalSkillPoint
            - Stats : 객체 배열 객체
            - Tendencies : 객체 배열 객체
            - ServerName
            - CharacterName
            - CharacterLevel
            - CharacterClassName
            - ItemAvgLevel
            - ItemMaxLevel
    */
    @Test
    public void 캐릭터_정보_캐릭터프로필_불러오기() {
        System.out.println(lostarkApiKey);

        try {
            String characterName = URLEncoder.encode("내장을통해미래를보는점술", StandardCharsets.UTF_8);

            URL url = new URL("https://developer-lostark.game.onstove.com/armories/characters/" + characterName + "/profiles");

            HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();

            httpURLConnection.setRequestMethod("GET");
            httpURLConnection.setRequestProperty("authorization", "Bearer " + lostarkApiKey);
            httpURLConnection.setRequestProperty("content-Type", "application/json");
            httpURLConnection.setRequestProperty("Accept", "application/json");

            int responseCode = httpURLConnection.getResponseCode();

            InputStream inputStream;

            if (responseCode == 200) {
                inputStream = httpURLConnection.getInputStream();
            } else {
                inputStream = httpURLConnection.getErrorStream();
                System.out.println("에러코드: " + responseCode);
            }

            InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
            JSONParser parser = new JSONParser();
            Object obj = parser.parse(inputStreamReader);

            if (obj instanceof JSONArray) {
                JSONArray array = (JSONArray) obj;
                System.out.println("JSONArray 응답: " + array);
            } else if (obj instanceof JSONObject) {
                JSONObject jsonObject = (JSONObject) obj;
                System.out.println("JSONObject 응답: " + jsonObject);
            } else {
                System.out.println("알 수 없는 응답 타입: " + obj.getClass().getName());
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /*
        key 리스트
            - CharacterClassName
            - ItemMaxLevel
            - CharacterLevel
            - ItemAvgLevel
            - ServerName
            - CharacterName
    */
    @Test
    public void 캐릭터_정보_캐릭터능력치_불러오기() {

    }

    /*
        key 리스트
            - CharacterClassName
            - ItemMaxLevel
            - CharacterLevel
            - ItemAvgLevel
            - ServerName
            - CharacterName
    */
    @Test
    public void 캐릭터_정보_캐릭터스킬_불러오기() {

    }

    /*
        key 리스트
            - CharacterClassName
            - ItemMaxLevel
            - CharacterLevel
            - ItemAvgLevel
            - ServerName
            - CharacterName
    */
    @Test
    public void 캐릭터_정보_캐릭터아바타_불러오기() {

    }

}
