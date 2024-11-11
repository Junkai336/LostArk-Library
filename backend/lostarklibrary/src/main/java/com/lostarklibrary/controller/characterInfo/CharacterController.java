package com.lostarklibrary.controller.characterInfo;

import com.lostarklibrary.constant.ErrorMessage;
import com.lostarklibrary.service.CharacterService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/characterInfo/")
@RequiredArgsConstructor
public class CharacterController {
    private final CharacterService service;

    // 특정 캐릭터가 가진 원정대 캐릭터들 찾기
    @GetMapping("/searchCharacterList")
    public Map<String, Object> searchCharacterList(@RequestParam String characterName) {
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("characterName", characterName);

        try {
            Map<String, Object> characterList = service.searchCharacterList(paramMap);

            return characterList;
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("errorMessage", ErrorMessage.SEARCH_CHARACTER_ERROR);

            return errorResponse;
        }
    }

    // 특정 캐릭터 찾기
    @GetMapping("/searchCharacterDetail")
    public Map<String, Object> searchCharacterDetail(@RequestParam String characterName) {
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("characterName", characterName);

        try {
            Map<String, Object> characterInfo = service.searchCharacterDetail(paramMap);

            return characterInfo;
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("error", ErrorMessage.SEARCH_CHARACTER_ERROR);

            return errorResponse;
        }
    }

}
