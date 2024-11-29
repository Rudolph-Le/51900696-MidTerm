package com.phucanhduong.repository.customer;

import com.phucanhduong.entity.customer.CustomerGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CustomerGroupRepository extends JpaRepository<CustomerGroup, Long>, JpaSpecificationExecutor<CustomerGroup> {
}