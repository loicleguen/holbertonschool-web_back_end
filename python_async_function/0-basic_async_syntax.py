#!/usr/bin/env python3
""" Module that defines an asynchronous
function to wait for a random delay."""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """Asynchronous function that waits for a random delay."""
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
