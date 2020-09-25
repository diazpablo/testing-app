import http from "./httpService";

export function getRepositories(owner) {
	return http.get(`/users/${owner}/repos`);
}

export function getContributors(owner, repo) {
	return http.get(`/repos/${owner}/${repo}/contributors`);
}

export default {
	getRepositories,
	getContributors
}