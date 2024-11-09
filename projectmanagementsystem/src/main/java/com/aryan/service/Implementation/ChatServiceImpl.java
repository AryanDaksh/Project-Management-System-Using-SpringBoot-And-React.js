package com.aryan.service.Implementation;

import com.aryan.model.entity.Chat;
import com.aryan.repository.ChatRepo;
import com.aryan.service.ChatService;
import org.springframework.stereotype.Service;

@Service
public class ChatServiceImpl implements ChatService {

    private ChatRepo chatRepo;

    @Override
    public Chat createChat(Chat chat) {
        return chatRepo.save(chat);
    }
}
