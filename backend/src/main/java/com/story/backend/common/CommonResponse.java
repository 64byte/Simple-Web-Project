package com.story.backend.common;

import lombok.Getter;

@Getter
public class CommonResponse {

    private int status;

    private Object result;

    public static CommonResponse of(int status, Object result) {
        CommonResponse commonResponse = new CommonResponse();

        commonResponse.status = status;
        commonResponse.result = result;

        return commonResponse;
    }

}
