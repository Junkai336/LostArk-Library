package com.lostarklibrary.utils;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

@Component
public class CommonCode {
    private static String lostarkApiKey;

    @Value("${lostark.api.key}")
    public void setLostarkApiKey(String lostarkApiKey) {
        CommonCode.lostarkApiKey = lostarkApiKey;
    }

    // API 요청 공통코드
    public static Map<String, Object> apiRequest(Map<String, Object> paramMap, String goal) {
        Map<String, Object> returnMap = new HashMap<>();

        String characterName;
        String encodeCharacterName;
        URL url = null;

        try {
            switch (goal) {
                case "characterList":
                    characterName = String.valueOf(paramMap.get("characterName"));
                    encodeCharacterName = URLEncoder.encode(characterName, StandardCharsets.UTF_8);
                    url = new URL("https://developer-lostark.game.onstove.com/characters/" + encodeCharacterName + "/siblings");
                    break;
                case "characterArmoryProfile":
                    characterName = String.valueOf(paramMap.get("characterName"));
                    encodeCharacterName = URLEncoder.encode(characterName, StandardCharsets.UTF_8);
                    url = new URL("https://developer-lostark.game.onstove.com/armories/characters/" + encodeCharacterName + "/profiles");
                    break;
                case "characterArmoryEquipment":
                    characterName = String.valueOf(paramMap.get("characterName"));
                    encodeCharacterName = URLEncoder.encode(characterName, StandardCharsets.UTF_8);
                    url = new URL("https://developer-lostark.game.onstove.com/armories/characters/" + encodeCharacterName + "/equipment");
                    break;
                default:
                    throw new IllegalArgumentException();
            }

            HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();

            httpURLConnection.setRequestMethod("GET");
            httpURLConnection.setRequestProperty("authorization", "Bearer " + lostarkApiKey);
            httpURLConnection.setRequestProperty("content-Type", "application/json");
            httpURLConnection.setRequestProperty("Accept", "application/json");

            int responseCode = httpURLConnection.getResponseCode();
            InputStream inputStream = responseCode == 200 ? httpURLConnection.getInputStream() : httpURLConnection.getErrorStream();

            InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
            JsonElement parseResult = JsonParser.parseReader(inputStreamReader);

            if (parseResult instanceof JsonArray) {
                JsonArray array = parseResult.getAsJsonArray();
                returnMap.put(goal, array.toString());
            } else if (parseResult instanceof JsonObject) {
                JsonObject object = parseResult.getAsJsonObject();
                returnMap.put(goal, object.toString());
            } else {
                throw new Exception();
            }

    } catch (Exception e) {
        returnMap.put("errorMessage", e.getMessage());

        System.out.println("에러 발생: " + e.getMessage());
    }

        return returnMap;
    }
}
