package com.aryan.service.Implementation;

import com.aryan.model.Invitation;
import com.aryan.service.InvitationService;
import org.springframework.stereotype.Service;

@Service
public class InvitationServiceImpl implements InvitationService {

    @Override
    public void sendInvitation(String email, Long projectId) {

    }

    @Override
    public Invitation acceptInvitation(String token, Long userId) {
        return null;
    }

    @Override
    public String getTokenByUserMail(String userEmail) {
        return "";
    }

    @Override
    public void deleteToken(String token) {

    }
}
