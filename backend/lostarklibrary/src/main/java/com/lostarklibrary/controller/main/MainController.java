package com.lostarklibrary.controller.main;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class MainController {
    @GetMapping("/hello")
    public String sayHello() {
        return "백엔드에서 온 데이터";
    }
}
