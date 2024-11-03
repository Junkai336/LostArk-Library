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

    // 특정 캐릭터 찾기
    @GetMapping("/searchCharacter")
    public Map<String, Object> searchCharacter(@RequestParam String characterName) {
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("characterName", characterName);

        try {
            Map<String, Object> characterInfo = service.searchCharacter(paramMap);

            return characterInfo;
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("error", ErrorMessage.SEARCH_CHARACTER_ERROR);

            System.out.println("에러 발생: " + e.getMessage());

            return errorResponse;
        }
    }

}
