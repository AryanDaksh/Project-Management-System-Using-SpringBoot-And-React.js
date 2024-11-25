package com.aryan.service.Implementation;

import com.aryan.model.entity.Issue;
import com.aryan.model.entity.Project;
import com.aryan.model.entity.User;
import com.aryan.repository.IssueRepo;
import com.aryan.request.IssueRequest;
import com.aryan.service.IssueService;
import com.aryan.service.ProjectService;
import com.aryan.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class IssueServiceImpl implements IssueService {

    @Autowired
    private IssueRepo issueRepo;

    @Autowired
    private ProjectService projectService;

    @Autowired
    private UserService userService;

    @Override
    public Issue getIssueById(long issueId) throws Exception {
        Optional<Issue> issue = issueRepo.findById(issueId);
        if (issue.isPresent()){
            return issue.get();
        }
        throw new Exception("No issue found with Issue ID: " + issueId);
    }

    @Override
    public List<Issue> getIssuesByProject(long projectId) throws Exception {
        return issueRepo.findByProjectId(projectId);
    }

    @Override
    public Issue createIssue(IssueRequest issueRequest, User user) throws Exception {
        Project project = projectService.getProjectById(issueRequest.getProjectId());

        Issue issue = new Issue();
        issue.setTitle(issueRequest.getTitle());
        issue.setDescription(issueRequest.getDescription());
        issue.setStatus(issueRequest.getStatus());
        issue.setProjectID(issue.getProjectID());
        issue.setPriority(issueRequest.getPriority());
        issue.setDueDate(issueRequest.getDueDate());

        issue.setProject(project);
        return issueRepo.save(issue);
    }

    @Override
    public void deleteIssue(long issueId, Long userid) throws Exception {
        getIssueById(issueId);

        issueRepo.deleteById(issueId);
    }

    @Override
    public Issue addUserToIssue(long issueId, Long userid) throws Exception {
        User user = userService.findUserById(userid);
        Issue issue = getIssueById(issueId);
        issue.setAssignee(user);

        return issueRepo.save(issue);
    }

    @Override
    public Issue updateStatus(Long issueId, String status) throws Exception {
        Issue issue = getIssueById(issueId); // reuse existing method to fetch the issue
        issue.setStatus(status); // update the status
        return issueRepo.save(issue); // save and return the updated issue
    }

}
