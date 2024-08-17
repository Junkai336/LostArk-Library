package com.lostarklibrary.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")                          // 모든 경로에 대해 CORS 요청 허용
                .allowedOrigins("http://localhost:3000")              // 허용할 출처(Origin) 지정
                .allowedMethods("GET", "POST", "PUT", "DELETE")       // 허용할 HTTP 메서드 지정
                .allowCredentials(true);                              // 쿠키나 인증 정보를 포함한 요청을 허용할지 여부 결정
    }

}
