package com.aryan.repository;

import com.aryan.model.entity.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubscriptioRepo extends JpaRepository<Subscription, Long> {

    Subscription findByUserId(Long userId);

}
