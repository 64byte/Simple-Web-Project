package com.story.backend;

import com.story.backend.common.CommonResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ApiController {

    @GetMapping
    public ResponseEntity<CommonResponse> getResultOfRequest() {
        return new ResponseEntity<>(CommonResponse.of(HttpStatus.OK.value(), true), HttpStatus.OK);
    }

}
