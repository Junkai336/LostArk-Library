package com.lostarklibrary.service;

import com.lostarklibrary.utils.CommonCode;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class CharacterService {
    @Value("${lostark.api.key}")
    private String lostarkApiKey;

    public Map<String, Object> searchCharacterList(Map<String, Object> paramMap) {
        Map<String, Object> resultMap = CommonCode.apiRequest(paramMap, "characterList");

        return resultMap;
    }

    public Map<String, Object> searchCharacterDetail(Map<String, Object> paramMap) {
        Map<String, Object> resultMap = new HashMap<>();

        try {
            Map<String, Object> armoryMap = searchCharacterArmory(paramMap);

            resultMap.putAll(armoryMap);

        } catch (Exception e) {
            resultMap.put("errorMessage", e.getMessage());
            System.out.println("에러 발생: " + e.getMessage());
        }

        return resultMap;
    }

    public Map<String, Object> searchCharacterArmory(Map<String, Object> paramMap) {
        Map<String, Object> armoryProfileMap = CommonCode.apiRequest(paramMap, "characterArmoryProfile");
        Map<String, Object> armoryEquipmentMap = CommonCode.apiRequest(paramMap, "characterArmoryEquipment");

        Map<String, Object> resultMap = new HashMap<>();

        resultMap.putAll(armoryProfileMap);
        resultMap.putAll(armoryEquipmentMap);

        return resultMap;
    }

}
