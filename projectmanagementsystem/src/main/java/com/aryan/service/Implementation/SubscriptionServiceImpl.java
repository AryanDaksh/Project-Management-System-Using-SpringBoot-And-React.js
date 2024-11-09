package com.aryan.service.Implementation;

import com.aryan.model.entity.PlanType;
import com.aryan.model.entity.Subscription;
import com.aryan.model.entity.User;
import com.aryan.repository.SubscriptioRepo;
import com.aryan.repository.UserRepo;
import com.aryan.service.SubscriptionService;
import com.aryan.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class SubscriptionServiceImpl implements SubscriptionService {

    @Autowired
    private SubscriptioRepo subscriptioRepo;

    @Autowired
    private UserService userService;

    @Override
    public Subscription createSubscription(User user) throws Exception {
        Subscription subscription = new Subscription();
        subscription.setUser(user);
        subscription.setSubscriptionStartDate(LocalDate.now());
        subscription.setSubscriptionEndDate(LocalDate.now().plusMonths(12));
        subscription.setValid(true);
        subscription.setPlanType(PlanType.FREE);

        return subscriptioRepo.save(subscription);
    }

    @Override
    public Subscription getUserSubscription(Long userId) throws Exception {
        Subscription subscription = subscriptioRepo.findByUserId(userId);
        if (isValid(subscription)) {
            subscription.setPlanType(PlanType.FREE);
            subscription.setSubscriptionEndDate(LocalDate.now().plusMonths(12));
            subscription.setSubscriptionStartDate(LocalDate.now());
        }

        return subscriptioRepo.save(subscription);
    }

    @Override
    public Subscription updateSubscription(Long userId, PlanType planType) throws Exception {

        Subscription subscription = subscriptioRepo.findByUserId(userId);
        subscription.setPlanType(planType);
        subscription.setSubscriptionStartDate(LocalDate.now());
        if (planType == PlanType.MONTHLY) {
            subscription.setSubscriptionEndDate(LocalDate.now().plusMonths(1));
        } else {
            subscription.setSubscriptionEndDate(LocalDate.now().plusMonths(12));
        }

        return subscriptioRepo.save(subscription);
    }

    @Override
    public boolean isValid(Subscription subscription) {
        if (subscription.getPlanType() == PlanType.FREE) {
            return true;
        }
        LocalDate endDate = subscription.getSubscriptionEndDate();
        LocalDate currentDate = LocalDate.now();

        return endDate.isAfter(currentDate) || currentDate.isEqual(currentDate);
    }
}
