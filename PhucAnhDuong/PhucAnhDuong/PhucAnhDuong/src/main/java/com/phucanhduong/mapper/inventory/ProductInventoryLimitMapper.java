package com.phucanhduong.mapper.inventory;

import com.phucanhduong.dto.inventory.ProductInventoryLimitRequest;
import com.phucanhduong.dto.inventory.ProductInventoryLimitResponse;
import com.phucanhduong.entity.inventory.ProductInventoryLimit;
import com.phucanhduong.mapper.GenericMapper;
import com.phucanhduong.utils.MapperUtils;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE, uses = MapperUtils.class)
public interface ProductInventoryLimitMapper extends GenericMapper<ProductInventoryLimit, ProductInventoryLimitRequest,
        ProductInventoryLimitResponse> {

    @Override
    @Mapping(source = "productId", target = "product")
    ProductInventoryLimit requestToEntity(ProductInventoryLimitRequest request);

    @Override
    @Mapping(source = "productId", target = "product")
    ProductInventoryLimit partialUpdate(@MappingTarget ProductInventoryLimit entity, ProductInventoryLimitRequest request);

}
