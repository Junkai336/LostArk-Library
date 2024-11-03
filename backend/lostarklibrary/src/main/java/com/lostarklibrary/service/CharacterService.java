package com.lostarklibrary.service;

import com.google.gson.JsonParser;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;

import java.net.URLEncoder;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import com.google.gson.JsonArray;

@Service
public class CharacterService {
    @Value("${lostark.api.key}")
    private String lostarkApiKey;

    public Map<String, Object> searchCharacter(Map<String, Object> paramMap) {
        Map<String, Object> resultMap = new HashMap<>();

        try {
            String characterName = String.valueOf(paramMap.get("characterName"));
            String encodeCharacterName = URLEncoder.encode(characterName, StandardCharsets.UTF_8);

            URL url = new URL("https://developer-lostark.game.onstove.com/characters/" + encodeCharacterName + "/siblings");
            HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();

            httpURLConnection.setRequestMethod("GET");
            httpURLConnection.setRequestProperty("authorization", "Bearer " + lostarkApiKey);
            httpURLConnection.setRequestProperty("content-Type", "application/json");
            httpURLConnection.setRequestProperty("Accept", "application/json");

            int responseCode = httpURLConnection.getResponseCode();
            InputStream inputStream = responseCode == 200 ? httpURLConnection.getInputStream() : httpURLConnection.getErrorStream();
            InputStreamReader inputStreamReader = new InputStreamReader(inputStream);

            JsonArray jsonArray = JsonParser.parseReader(inputStreamReader).getAsJsonArray();
            resultMap.put("data", jsonArray.toString());

            System.out.println(resultMap);
        } catch (Exception e) {
            resultMap.put("error", e.getMessage());

            System.out.println("에러 발생: " + e.getMessage());
        }

        return resultMap;
    }
}
