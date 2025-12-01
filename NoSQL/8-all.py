#!/usr/bin/env python3
"""List all documents in a MongoDB collection"""


def list_all(mongo_collection):
    """Lists all documents in a MongoDB collection.
    Returns an empty list if no document is found."""
    return list(mongo_collection.find())
