package com.aryan.controller;

import com.aryan.model.entity.Issue;
import com.aryan.model.entity.User;
import com.aryan.model.dto.IssueDTO;
import com.aryan.request.IssueRequest;
import com.aryan.response.ApiResponse;
import com.aryan.service.IssueService;
import com.aryan.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequestMapping("/api/issue")
public class IssueController {

    @Autowired
    private IssueService issueService;

    @Autowired
    private UserService userService;

    @GetMapping("/{issueId}")
    public ResponseEntity<Issue> getIssueById(@PathVariable Long issueId) throws Exception {
        return ResponseEntity.ok(issueService.getIssueById(issueId));
    }

    @GetMapping("/project/{projectId}")
    public ResponseEntity<Issue> getIssueByProjectId(@PathVariable Long projectId) throws Exception {
        return ResponseEntity.ok(issueService.getIssueById(projectId));
    }

    @PostMapping
    public ResponseEntity<IssueDTO> createIssue(@RequestBody IssueRequest issue,
                                                @RequestHeader("Authorization") String token)
            throws Exception {
        User tokenUser = userService.findUserByJwt(token);
        User user = userService.findUserById(tokenUser.getId());

            Issue createdIssue = issueService.createIssue(issue, tokenUser);
            IssueDTO issueDTO = new IssueDTO();
            issueDTO.setDescription(createdIssue.getDescription());
            issueDTO.setDueDate(LocalDate.from(createdIssue.getDueDate()));
            issueDTO.setId(createdIssue.getId());
            issueDTO.setPriority(createdIssue.getPriority());
            issueDTO.setProject(createdIssue.getProject());
            issueDTO.setStatus(createdIssue.getStatus());
            issueDTO.setTitle(createdIssue.getTitle());
            issueDTO.setTags(createdIssue.getTags());
            issueDTO.setAssignee(createdIssue.getAssignee());

        return ResponseEntity.ok(issueDTO);
    }

    @DeleteMapping
    public ResponseEntity<ApiResponse> deleteIssue(@PathVariable Long issueId,
                                                    @RequestHeader("Authorization") String token)
            throws Exception {
        User user = userService.findUserByJwt(token);
        issueService.deleteIssue(issueId, user.getId());

        ApiResponse res = new ApiResponse();
        res.setMessage("Successfully deleted Issue.");

        return null;
    }

    @PutMapping("/{issueId}/assignee/{userId}")
    public ResponseEntity<Issue> addUserToIssue (@PathVariable Long issueId,
                                                 @PathVariable Long userId)
            throws Exception {
        Issue issue = issueService.addUserToIssue(issueId, userId);

        return ResponseEntity.ok(issue);
    }

    @PutMapping("/{issueId}/status/{status}")
    public ResponseEntity<Issue> updateIssueStatus (
            @PathVariable String status,
            @PathVariable Long issueId) throws Exception {
        Issue issue = issueService.updateStatus(issueId, status);

        return ResponseEntity.ok(issue);
    }
}
