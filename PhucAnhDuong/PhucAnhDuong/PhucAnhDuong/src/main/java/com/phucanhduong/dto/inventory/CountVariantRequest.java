package com.phucanhduong.dto.inventory;

import lombok.Data;

@Data
public class CountVariantRequest {
    private Long variantId;
    private Integer inventory;
    private Integer actualInventory;
}
