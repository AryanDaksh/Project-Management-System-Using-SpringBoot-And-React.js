package com.aryan.service.Implementation;

import com.aryan.model.Chat;
import com.aryan.repository.ChatRepo;
import com.aryan.service.ChatService;

public class ChatServiceImpl implements ChatService {

    private ChatRepo chatRepo;

    @Override
    public Chat createChat(Chat chat) {
        return chatRepo.save(chat);
    }
}
