#!/usr/bin/env python3
"""This module contains a function that runs multiple
task_wait_random coroutines concurrently and
returns their results in the order they complete."""
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Runs task_wait_random n times and
    returns the delays in completion order."""
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    results: List[float] = []
    for task in asyncio.as_completed(tasks):
        delay = await task
        results.append(delay)
    return results
