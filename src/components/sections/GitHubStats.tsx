'use client';

import { useEffect, useRef, useState } from 'react';
import { Github, Code, Star, GitFork, GitPullRequest, Users, Calendar, BarChart2 } from 'lucide-react';

interface GitHubStats {
    publicRepos: number;
    followers: number;
    totalStars: number;
    totalForks: number;
    totalContributions: string;
    pullRequests: string;
}

export default function GitHubStats() {
    const [stats, setStats] = useState<GitHubStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const username = 'aniketraut16'; // Your GitHub username

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100');
                    entry.target.classList.remove('translate-y-10', 'opacity-0');
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        async function fetchGitHubStats() {
            try {
                setLoading(true);

                // Fetch basic user data
                const userResponse = await fetch(`https://api.github.com/users/${username}`);
                if (!userResponse.ok) throw new Error('Failed to fetch GitHub user data');
                const userData = await userResponse.json();

                // Fetch repositories to calculate stars and forks
                const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
                if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
                const repos = await reposResponse.json();

                const totalStars = repos.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0);
                const totalForks = repos.reduce((sum: number, repo: any) => sum + repo.forks_count, 0);

                // Note: For contributions and PRs, GitHub API has limitations
                // These would typically require GitHub GraphQL API with authentication
                // For demo purposes, using placeholder values
                const totalContributions = "1400"; // Placeholder
                const pullRequests = "50"; // Placeholder

                setStats({
                    publicRepos: userData.public_repos,
                    followers: userData.followers,
                    totalStars,
                    totalForks,
                    totalContributions,
                    pullRequests
                });
            } catch (err) {
                setError('Failed to load GitHub statistics');
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchGitHubStats();
    }, [username]);

    return (
        <section
            id="github-stats"
            ref={sectionRef}
            className="min-h-screen py-20 transition-all duration-1000 translate-y-10 opacity-0"
        >
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Coding Stats</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
                        A snapshot of my coding journey and GitHub contributions.
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                    </div>
                ) : error ? (
                    <div className="text-center text-red-500 p-4 glass rounded-xl">
                        {error}
                    </div>
                ) : stats && (
                    <>
                        {/* GitHub Overview */}
                        <div className="mb-12">
                            <div className="glass p-6 rounded-xl mb-8">
                                <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                                    <div className="w-24 h-24 rounded-full overflow-hidden">
                                        <img
                                            src={`https://github.com/${username}.png`}
                                            alt="GitHub Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold mb-2">@{username}</h3>
                                        <p className="text-muted-foreground mb-4">
                                            Passionate developer focused on creating innovative solutions
                                        </p>
                                        <a
                                            href={`https://github.com/${username}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-[10px] bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                                        >
                                            <Github size={16} />
                                            <span>View GitHub Profile</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                <div className="glass p-4 rounded-xl hover:shadow-[0_0_15px_rgba(var(--primary)/30)] transition-all text-center">
                                    <div className="flex justify-center mb-2">
                                        <Github size={20} className="text-primary" />
                                    </div>
                                    <p className="text-2xl font-bold">{stats.publicRepos}</p>
                                    <p className="text-xs text-muted-foreground">Repositories</p>
                                </div>

                                <div className="glass p-4 rounded-xl hover:shadow-[0_0_15px_rgba(var(--primary)/30)] transition-all text-center">
                                    <div className="flex justify-center mb-2">
                                        <Code size={20} className="text-primary" />
                                    </div>
                                    <p className="text-2xl font-bold">{stats.totalContributions}+</p>
                                    <p className="text-xs text-muted-foreground">Contributions</p>
                                </div>

                                <div className="glass p-4 rounded-xl hover:shadow-[0_0_15px_rgba(var(--primary)/30)] transition-all text-center">
                                    <div className="flex justify-center mb-2">
                                        <Star size={20} className="text-primary" />
                                    </div>
                                    <p className="text-2xl font-bold">{stats.totalStars}</p>
                                    <p className="text-xs text-muted-foreground">Stars</p>
                                </div>

                                <div className="glass p-4 rounded-xl hover:shadow-[0_0_15px_rgba(var(--primary)/30)] transition-all text-center">
                                    <div className="flex justify-center mb-2">
                                        <GitFork size={20} className="text-primary" />
                                    </div>
                                    <p className="text-2xl font-bold">{stats.totalForks}</p>
                                    <p className="text-xs text-muted-foreground">Forks</p>
                                </div>

                                <div className="glass p-4 rounded-xl hover:shadow-[0_0_15px_rgba(var(--primary)/30)] transition-all text-center">
                                    <div className="flex justify-center mb-2">
                                        <GitPullRequest size={20} className="text-primary" />
                                    </div>
                                    <p className="text-2xl font-bold">{stats.pullRequests}+</p>
                                    <p className="text-xs text-muted-foreground">PRs</p>
                                </div>

                                <div className="glass p-4 rounded-xl hover:shadow-[0_0_15px_rgba(var(--primary)/30)] transition-all text-center">
                                    <div className="flex justify-center mb-2">
                                        <Users size={20} className="text-primary" />
                                    </div>
                                    <p className="text-2xl font-bold">{stats.followers}</p>
                                    <p className="text-xs text-muted-foreground">Followers</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                <div className="space-y-12">
                    {/* GitHub Contribution Calendar - Dark Theme */}
                    <div className="glass p-8 rounded-xl">
                        <div className="flex items-center gap-3 mb-6">
                            <Calendar size={24} className="text-primary" />
                            <h3 className="text-xl font-bold">GitHub Contribution Calendar</h3>
                        </div>

                        <div className="bg-[#0d1117] p-4 rounded-[10px]">
                            <img
                                src={`https://ghchart.rshah.org/7c4dff/${username}`}
                                alt="GitHub Contributions Graph"
                                className="w-full"
                            />
                        </div>
                    </div>

                    {/* LeetCode Stats - Updated URL */}
                    <div className="glass p-8 rounded-xl">
                        <div className="flex items-center gap-3 mb-6">
                            <Code size={24} className="text-primary" />
                            <h3 className="text-xl font-bold">LeetCode Performance</h3>
                        </div>

                        <div className="relative overflow-hidden rounded-lg">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none rounded-lg"></div>

                            <img
                                src="https://leetcard.jacoblin.cool/rautnaniket?theme=transparent&font=Exo&ext=heatmap"
                                alt="LeetCode Stats"
                                className="w-full rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 