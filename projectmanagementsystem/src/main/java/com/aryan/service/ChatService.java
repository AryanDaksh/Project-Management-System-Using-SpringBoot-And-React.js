package com.aryan.service;

import com.aryan.model.Chat;
import org.springframework.stereotype.Service;

@Service
public interface ChatService {

    Chat createChat(Chat chat);

}
