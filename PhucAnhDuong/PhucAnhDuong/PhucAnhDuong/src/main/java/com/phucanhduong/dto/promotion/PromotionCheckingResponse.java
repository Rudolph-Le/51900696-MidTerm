package com.phucanhduong.dto.promotion;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PromotionCheckingResponse {
    private boolean promotionable;
}