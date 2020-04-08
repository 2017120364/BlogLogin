package com.login.login.domain;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class LoginInfo {

    @NotNull(message="用户名不允许为空")
    private String username;

    @NotNull(message="用户名不允许为空")
    private String passward;
}
