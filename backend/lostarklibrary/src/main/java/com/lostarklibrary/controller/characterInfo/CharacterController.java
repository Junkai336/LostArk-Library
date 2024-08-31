package com.lostarklibrary.controller.characterInfo;

import com.lostarklibrary.service.CharacterService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class CharacterController {
    @Value("${lostark.api.key}")
    private String lostarkApiKey;

    private final CharacterService characterService;

    @GetMapping("/characterInfo")
    public Map<String, Object> characterInfoLoading(@PathVariable String characterName) {
        Map<String, Object> paramMap = new HashMap<>();

        try {

            return paramMap;
        } catch (Exception e) {

            return paramMap;
        }
    }

}
