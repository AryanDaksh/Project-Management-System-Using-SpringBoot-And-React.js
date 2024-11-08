package com.aryan.service;

import com.aryan.model.entity.Issue;
import com.aryan.model.entity.User;
import com.aryan.request.IssueRequest;

import java.util.List;
import java.util.Optional;

public interface IssueService {

    Issue getIssueById(long issueId) throws Exception;

    Optional<Issue> getIssue(long id) throws Exception;

    Optional<Issue> getIssueByProjectId(long projectId) throws Exception;

    List<Issue> getIssuesByProject() throws Exception;

    Issue createIssue(IssueRequest issue, User user) throws Exception;

    void deleteIssue(long issueId, Long userid) throws Exception;

    Issue addUserToIssue(long issueId, Long userid) throws Exception;

    Issue updateIssue(Issue issue, String status) throws Exception;

    Issue updateStatus(Long issueId, String status);
}
